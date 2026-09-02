import { useRef, useState, Suspense, useEffect, startTransition } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  Float,
  MeshDistortMaterial,
  Environment,
  Sparkles,
  Line,
  OrbitControls,
} from '@react-three/drei'
import type { Mesh, Group } from 'three'
import * as THREE from 'three'

/** Central distorted icosahedron — the "core" the whole scene orbits around. */
function CoreShape({ themeColor }: { themeColor: string }) {
  const mesh = useRef<Mesh>(null)
  const wire = useRef<Mesh>(null)

  useFrame((_, delta) => {
    // Scroll factor between 0 (top) and 1 (scrolled 600px down)
    const scrollFactor = Math.min(window.scrollY / 600, 1)
    const speedMultiplier = 1 + scrollFactor * 5 // Spins up to 6x faster

    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.12 * speedMultiplier
      mesh.current.rotation.y += delta * 0.18 * speedMultiplier
      
      // Core shrinks and distorts more as you scroll
      const targetScale = 1 - scrollFactor * 0.4
      mesh.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
    }
    
    if (wire.current) {
      wire.current.rotation.x -= delta * 0.08 * speedMultiplier
      wire.current.rotation.y -= delta * 0.1 * speedMultiplier
      
      // Wireframe disconnects and expands outward
      const targetWireScale = 1.16 + scrollFactor * 1.2
      wire.current.scale.lerp(new THREE.Vector3(targetWireScale, targetWireScale, targetWireScale), 0.1)
    }
  })

  return (
    <group>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.35, 1]} />
        <MeshDistortMaterial
          color="#0f0f0f"
          distort={0.18}
          speed={1.6}
          roughness={0.2}
          metalness={0.85}
          emissive={themeColor}
          emissiveIntensity={0.1}
          flatShading
        />
      </mesh>
      <mesh ref={wire} scale={1.16}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshBasicMaterial color={themeColor} wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

/** Small orbiting nodes connected to the core with thin lines, like a dependency graph. */
function OrbitNodes({ themeColor }: { themeColor: string }) {
  const group = useRef<Group>(null)
  const nodes = [
    [2.6, 0.6, -0.4],
    [-2.4, -0.8, 0.6],
    [0.4, 2.2, -1.1],
    [-0.6, -2.3, 0.8],
    [2.1, -1.4, 1.2],
    [-2.5, 1.1, -0.8],
  ] as const

  useFrame((_, delta) => {
    if (!group.current) return
    
    const scrollFactor = Math.min(window.scrollY / 600, 1)
    
    // Accelerate rotation
    group.current.rotation.y += delta * (0.06 + scrollFactor * 0.4)
    
    // Expand the orbit radius as you scroll
    const targetScale = 1 + scrollFactor * 0.8
    group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
  })

  return (
    <group ref={group}>
      {nodes.map((pos, i) => (
        <group key={i}>
          <Line
            points={[[0, 0, 0], pos as [number, number, number]]}
            color={themeColor}
            transparent
            opacity={0.18}
            lineWidth={1}
          />
          <Float speed={2 + i * 0.2} rotationIntensity={0.6} floatIntensity={1.2}>
            <mesh position={pos as unknown as [number, number, number]}>
              <octahedronGeometry args={[0.09, 0]} />
              <meshStandardMaterial
                color={themeColor}
                emissive={themeColor}
                emissiveIntensity={1.4}
                toneMapped={false}
              />
            </mesh>
          </Float>
        </group>
      ))}
    </group>
  )
}

/** Whole scene tilts slightly toward the pointer for a subtle parallax feel, and moves on scroll. */
function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<Group>(null)
  const { viewport } = useThree()

  useFrame((state) => {
    if (!group.current) return
    const x = (state.pointer.x * viewport.width) / 24
    const y = (state.pointer.y * viewport.height) / 24
    
    // Mouse parallax
    group.current.rotation.y += (x - group.current.rotation.y) * 0.04
    group.current.rotation.x += (-y - group.current.rotation.x) * 0.04
    
    // Shift to the right on desktop so it doesn't overlap the text too much
    const isDesktop = viewport.width > 6;
    const targetX = isDesktop ? 1.8 : 0;
    group.current.position.x += (targetX - group.current.position.x) * 0.1;
    
    // Extremely subtle scroll parallax (almost static, just floats slightly)
    const targetY = -window.scrollY * 0.0003;
    group.current.position.y += (targetY - group.current.position.y) * 0.1;
  })

  return <group ref={group}>{children}</group>
}

export function HeroScene() {
  const [ready, setReady] = useState(false)
  
  // Default to the green theme hex, then update from localStorage or events
  const [themeColor, setThemeColor] = useState('#39ff8f')

  useEffect(() => {
    // Try to load initial from local storage if available
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'custom') {
      const hex = localStorage.getItem('portfolio-custom-color')
      if (hex) setThemeColor(hex)
    } else if (saved) {
      const themes: Record<string, string> = {
        green: '#39ff8f',
        purple: '#b026ff',
        blue: '#00d2ff',
        orange: '#ff5e00',
        pink: '#ff007f'
      }
      if (themes[saved]) setThemeColor(themes[saved])
    }

    // Listen to changes from the Navbar picker
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      startTransition(() => {
        setThemeColor(customEvent.detail);
      });
    };

    window.addEventListener('theme-change', handleThemeChange);
    return () => window.removeEventListener('theme-change', handleThemeChange);
  }, []);

  return (
    <div
      className="absolute inset-0 h-full w-full cursor-grab active:cursor-grabbing"
      aria-hidden="true"
      style={{ opacity: ready ? 1 : 0, transition: 'opacity 1s ease' }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
        onCreated={() => setReady(true)}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 4, 4]} intensity={1.1} color="#ffffff" />
        <pointLight position={[-4, -2, -2]} intensity={0.6} color={themeColor} />

        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} enablePan={false} makeDefault />
          <Rig>
            <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.6}>
              <CoreShape themeColor={themeColor} />
            </Float>
            <OrbitNodes themeColor={themeColor} />
          </Rig>
          <Sparkles count={60} scale={7} size={1.5} speed={0.3} color={themeColor} opacity={0.5} />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Mail, Linkedin, Github, ExternalLink, Award, User, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Certificate {
  title: string
  year: string
  pdfUrl: string
}

interface Project {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  liveUrl?: string
}

export default function Portfolio() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

  const certificates: Certificate[] = [
    { title: "SQL", year: "2024", pdfUrl: "/PortfolioLucca/certificados/CertificadoSQL.pdf" },
    { title: "Git & GitHub", year: "2024", pdfUrl: "/PortfolioLucca/certificados/CertificadoGIT.GITHUB.pdf" },
    { title: "AWS Sales Accreditation", year: "2024", pdfUrl: "/PortfolioLucca/certificados/CertificadoSA.AWS.pdf" },
    { title: "Serverless Analytics", year: "2024", pdfUrl: "/PortfolioLucca/certificados/Serverless Analytics.pdf" },
    { title: "AWS Accreditation", year: "2024", pdfUrl: "/PortfolioLucca/certificados/AWS Accreditation.pdf" },
    { title: "AWS Cloud Economics", year: "2024", pdfUrl: "/PortfolioLucca/certificados/AWSCloudEconomics.pdf" },
  ]

  const projects: Project[] = [
    {
      title: "Precision",
      description: "Projeto Acadêmico que consiste na criação de uma Landing Page moderna e responsiva.",
      technologies: ["HTML", "CSS", "React"],
      imageUrl: "/PortfolioLucca/imagens/Precision.png",
      liveUrl: "https://lukkzhs.github.io/PrecisionV1/",
    },
    {
      title: "Aplicativo de Aprendizado Infantil",
      description:
        "Aplicativo com o objetivo de auxiliar na alfabetização de crianças. Possui também uma interface Web para cadastro de atividades.",
      technologies: ["React Native", "React", "Java", "MongoDB", "Firebase"],
      imageUrl: "/PortfolioLucca/imagens/telaQuiz.png",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Lucca Henrique
            </h1>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Sobre Mim
              </button>
              <button
                onClick={() => scrollToSection("projetos")}
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("certificados")}
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Certificados
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Contato
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/PortfolioLucca/imagens/lucca.jpg"
                  alt="Foto de perfil de Lucca Henrique"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Lucca Henrique
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
                Desenvolvedor apaixonado por criar experiências digitais incríveis
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => scrollToSection("projetos")}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Briefcase className="mr-2 h-5 w-5" />
                  Ver Projetos
                </Button>
                <Button
                  onClick={() => scrollToSection("contato")}
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Entre em Contato
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section id="sobre" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-slate-800">Sobre Mim</h2>
            <Card className="p-8 shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="pt-0">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Tenho 22 anos e moro em Uberlândia - MG. Sou apaixonado por desenvolver experiências digitais
                  incríveis e estou sempre em busca de novos desafios para aprimorar minhas habilidades. Com foco em
                  tecnologias modernas e melhores práticas de desenvolvimento, busco criar soluções que façam a
                  diferença.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">Projetos</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-100 text-blue-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Projeto
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificados */}
      <section id="certificados" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-800">Certificados</h2>
          <p className="text-center text-slate-600 mb-12">Clique em um certificado para visualizar</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm group"
                onClick={() => setSelectedCertificate(cert)}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-slate-800">{cert.title}</CardTitle>
                  <CardDescription className="text-slate-600">Concluído em {cert.year}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-slate-800">Contato</h2>
            <Card className="p-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-0">
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="mailto:luccahs03@gmail.com">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Email
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/lucca-sousa-51787b27a/" target="_blank">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      <Linkedin className="mr-2 h-5 w-5" />
                      LinkedIn
                    </Button>
                  </Link>
                  <Link href="https://github.com/luccaHEN" target="_blank">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      GitHub
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Lucca Henrique | Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Modal para Certificados */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle>{selectedCertificate?.title}</DialogTitle>
          </DialogHeader>
          <div className="p-6 pt-0">
            {selectedCertificate && (
              <iframe
                src={selectedCertificate.pdfUrl}
                className="w-full h-[70vh] border-0 rounded-lg"
                title={`Certificado ${selectedCertificate.title}`}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/footer"

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Votrix: Smart WEB3 Based Voting Platform",
      image: "/pro_ev.png?height=300&width=400",
      github: "https://github.com/sohampawar1866/evotrix",
      demo: "https://evotrix.sohampawar.me",
      description:
        "A secure and transparent voting platform built on Ethereum blockchain using smart contracts. Features multi-authority verification, Aadhar-based voter auth, real-time vote count, and fraud prevention. Built with Next.js, TypeScript, Ethers.js, and deployed on Sepolia testnet.",
    },
    {
      title: "Portfolio Website",
      image: "/pro_pf.png?height=300&width=400",
      github: "",
      demo: "https://sohampawar1866.github.io/portfolio/",
      description:
        "A modern, responsive portfolio website built with React and Tailwind CSS, showcasing innovative web development projects, technical expertise, and professional experience. Features seamless navigation, interactive components, and optimized performance to highlight skills in frontend development and user experience design.",
    },
    {
      title: "Project Sankalpa - IN PROGRESS",
      image: "/progress.jpg?height=300&width=400",
      github: "",
      demo: "",
      description:
        "An autonomous blockchain assistant built with Next.js, TypeScript, and TensorFlow that executes smart contract interactions, automates DeFi operations, and makes data-driven decisions. Features real-time market analysis, portfolio management, and seamless Web3 integration for intelligent on-chain automation.",
    },
  ]

  export default function gitPrivateCheck(link) {
  if(link!=""){
    return window.open(link, "_blank");
  } else {
    return alert("Its a Private GITHUB repo, if u would like to contribute, please mail me personally");
  }
  }

  export default function demoRunCheck(link) {
  if(link!=""){
    return window.open(link, "_blank");
  } else {
    return alert("PROJECT WORK IS STILL IN PROGRESS, if u would like to contribute, please mail me personally!");
  }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 md:p-6 lg:p-8">
        <Link href="/" className="text-xl md:text-2xl font-bold text-white">
          Soham Pawar
        </Link>
        <Button variant="ghost" size="sm" asChild className="text-white hover:text-emerald-300">
          <Link href="/experience">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Experience
          </Link>
        </Button>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-emerald-300 text-base sm:text-lg mb-3 sm:mb-4">Browse My Recent</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8">Projects</h1>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="w-full"
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="text-lg sm:text-xl text-white leading-tight">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow flex flex-col">
                  <p className="text-emerald-100 text-sm sm:text-base leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                        onClick={() => gitPrivateCheck(project.github)}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Github
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Button
            size="lg"
            asChild
            className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105"
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

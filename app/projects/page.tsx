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
      description: "A secure and transparent voting platform built on Ethereum blockchain using smart contracts. Features multi-authority verification, Aadhar-based voter auth, real-time vote count, and fraud prevention. Built with Next.js, TypeScript, Ethers.js, and deployed on Sepolia testnet.",
    },
    {
      title: "Portfolio Website",
      image: "/pro_pf.png?height=300&width=400",
      github: "https://github.com/sohampawar1866/portfolio",
      demo: "https://sohampawar1866.github.io/portfolio/",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, showcasing innovative web development projects, technical expertise, and professional experience. Features seamless navigation, interactive components, and optimized performance to highlight skills in frontend development and user experience design.",
    },
    {
      title: "Project Sankalpa - IN PROGRESS",
      image: "/progress.jpg?height=300&width=400",
      github: "https://github.com/sohampawar1866/portfolio",
      demo: "https://sohampawar1866.github.io/portfolio/",
      description: "An autonomous blockchain assistant built with Next.js, TypeScript, and TensorFlow that executes smart contract interactions, automates DeFi operations, and makes data-driven decisions. Features real-time market analysis, portfolio management, and seamless Web3 integration for intelligent on-chain automation.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 md:p-8">
        <Link href="/" className="text-2xl font-bold text-white">
          Soham Pawar
        </Link>
        <Button variant="ghost" size="sm" asChild className="text-white hover:text-emerald-300">
          <Link href="/experience">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Experience
          </Link>
        </Button>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-300 text-lg mb-4">Browse My Recent</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">Projects</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-emerald-100">{project.description}</p>
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Github
                    </Button>
                    <Button
                      size="sm"
                      className="bg-emerald-600 hover:bg-emerald-700"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
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
          className="text-center mt-16"
        >
          <Button size="lg" asChild className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-white"
        >
          Soham Pawar
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex space-x-8"
        >
          <Link href="/about" className="text-white hover:text-blue-300 transition-colors">
            About
          </Link>
          <Link href="/experience" className="text-white hover:text-blue-300 transition-colors">
            Experience
          </Link>
          <Link href="/projects" className="text-white hover:text-blue-300 transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-300 transition-colors">
            Contact
          </Link>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
            <img
              src="/profile.png?height=200&width=200"
              alt="Soham Pawar Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl text-blue-200 mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Soham Pawar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-2xl md:text-3xl text-blue-200 mb-12"
        >
          Web Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
            onClick={() => window.open("/SohamProfile.pdf", "_blank")}
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link href="/contact">
              Contact Info
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex space-x-6 mb-8"
        >
          <a
            href="https://linkedin.com/in/sohampawar1866"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/sohampawar1866"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="mailto:sohampawar1866@gmail.com"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"
import { useState } from "react"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-4 md:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-bold text-white"
        >
          Soham Pawar
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex space-x-6 lg:space-x-8"
        >
          <Link href="/about" className="text-white hover:text-blue-300 transition-colors duration-300">
            About
          </Link>
          <Link href="/experience" className="text-white hover:text-blue-300 transition-colors duration-300">
            Experience
          </Link>
          <Link href="/projects" className="text-white hover:text-blue-300 transition-colors duration-300">
            Projects
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-300 transition-colors duration-300">
            Contact
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-white hover:text-blue-300 transition-colors duration-300"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden"
            onClick={closeMobileMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-64 bg-slate-900/95 backdrop-blur-md border-l border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-white/10">
                <span className="text-white font-semibold">Menu</span>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-white hover:text-blue-300 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col p-4 space-y-4">
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="text-white hover:text-blue-300 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
                >
                  About
                </Link>
                <Link
                  href="/experience"
                  onClick={closeMobileMenu}
                  className="text-white hover:text-blue-300 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
                >
                  Experience
                </Link>
                <Link
                  href="/projects"
                  onClick={closeMobileMenu}
                  className="text-white hover:text-blue-300 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="text-white hover:text-blue-300 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 sm:mb-8"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl">
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
          className="text-lg sm:text-xl text-blue-200 mb-3 sm:mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          Soham Pawar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-xl sm:text-2xl md:text-3xl text-blue-200 mb-8 sm:mb-12"
        >
          Web3 & MERN Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 w-full max-w-md sm:max-w-none"
        >
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            onClick={() => window.open("/SohamProfile.pdf", "_blank")}
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105"
            asChild
          >
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
          className="flex space-x-4 sm:space-x-6"
        >
          <a
            href="https://linkedin.com/in/sohampawar1866"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a
            href="https://github.com/sohampawar1866"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            <Github className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a
            href="mailto:sohampawar1866@gmail.com"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/footer"

export default function ExperiencePage() {
  const frontendSkills = [
    { name: "React JS" },
    { name: "Tailwind CSS" },
    { name: "Bootstrap" },
    { name: "Material UI" },
    { name: "XML" },
  ]

  const backendSkills = [{ name: "Node.js" }, { name: "Next.js" }, { name: "Java" }, { name: "PHP" }]

  const databaseSkills = [{ name: "MySQL" }, { name: "Firebase" }]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 md:p-6 lg:p-8">
        <Link href="/" className="text-xl md:text-2xl font-bold text-white">
          Soham Pawar
        </Link>
        <Button variant="ghost" size="sm" asChild className="text-white hover:text-emerald-300">
          <Link href="/about">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to About
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
          <p className="text-emerald-300 text-base sm:text-lg mb-3 sm:mb-4">Explore My</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8">Experience</h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-white text-center">Frontend Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {frontendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                  >
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold text-sm sm:text-base">{skill.name}</h3>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-white text-center">Backend Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {backendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                  >
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold text-sm sm:text-base">{skill.name}</h3>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-white text-center">Database Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {databaseSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                  >
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold text-sm sm:text-base">{skill.name}</h3>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Button
            size="lg"
            asChild
            className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105"
          >
            <Link href="/projects">View My Projects</Link>
          </Button>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, GraduationCap, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 md:p-8">
        <Link href="/" className="text-2xl font-bold text-white">
          Soham Pawar
        </Link>
        <Button variant="ghost" size="sm" asChild className="text-white hover:text-blue-300">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
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
          <p className="text-blue-300 text-lg mb-4">Get To Know More</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">About Me</h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-blue-500/20 shadow-2xl">
              <img
                src="/profile.png?height=400&width=400"
                alt="Soham Pawar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Briefcase className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Experience</h3>
                  <p className="text-blue-200">
                    2+ years
                    <br />
                    Website Development
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                  <p className="text-blue-200">
                    BTech ECE at IIIT Nagpur
                    <br />
                    Web Developer Apprenticeship
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <p className="text-lg text-blue-100 leading-relaxed">
                  As a dedicated and curious individual, I am currently pursuing BTech. in ECE at IIIT Nagpur. My skills
                  as a web developer provided me with hands-on experience in frontend and backend development, creating
                  efficient and user-friendly web solutions. I am passionate about technology and problem-solving,
                  always eager to learn and adapt to new challenges.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/experience">View My Experience</Link>
          </Button>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

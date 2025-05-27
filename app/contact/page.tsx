"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Mail, Linkedin, Send, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [emailCopied, setEmailCopied] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    // Simulate form processing
    setTimeout(() => {
      setSubmitMessage(
        "Thank you for your message! Please copy my email address below and send me your message directly, or connect with me on LinkedIn.",
      )
      setIsSubmitting(false)
    }, 1000)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("sohampawar1866@gmail.com")
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      console.log("Copy not supported")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 md:p-6 lg:p-8">
        <Link href="/" className="text-xl md:text-2xl font-bold text-white">
          Soham Pawar
        </Link>
        <Button variant="ghost" size="sm" asChild className="text-white hover:text-indigo-300">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-indigo-300 text-base sm:text-lg mb-3 sm:mb-4">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8">Contact Me</h1>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 sm:p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Email</h3>
                  <div className="space-y-2">
                    <p className="text-indigo-300 text-sm sm:text-base break-all">sohampawar1866@gmail.com</p>
                    <Button
                      onClick={copyEmail}
                      size="sm"
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                    >
                      {emailCopied ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy Email
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 sm:p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto">
                    <Linkedin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">LinkedIn</h3>
                  <div className="space-y-2">
                    <p className="text-indigo-300 text-sm sm:text-base break-all">linkedin.com/in/sohampawar1866</p>
                    <Button
                      onClick={() => window.open("https://www.linkedin.com/in/sohampawar1866/", "_blank")}
                      size="sm"
                      className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300"
                    >
                      Connect on LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">
                  Send Me a Message
                </h3>
                <p className="text-indigo-200 text-center mb-4 sm:mb-6 text-sm sm:text-base">
                  Fill out the form below and I'll get back to you as soon as possible!
                </p>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-white mb-2 text-sm sm:text-base">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-white mb-2 text-sm sm:text-base">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white mb-2 text-sm sm:text-base">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, question, or just say hello!"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Processing..." : "Prepare Message"}
                  </Button>
                </form>
                {submitMessage && (
                  <div className="mt-6 p-4 rounded-lg bg-blue-500/20 text-blue-300 text-center">
                    <p className="text-sm sm:text-base">{submitMessage}</p>
                    <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
                      <Button
                        onClick={() => window.open("mailto:sohampawar1866@gmail.com", "_blank")}
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 transition-all duration-300"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Open Email App
                      </Button>
                      <Button
                        onClick={() => window.open("https://www.linkedin.com/in/sohampawar1866/", "_blank")}
                        size="sm"
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                      >
                        <Linkedin className="mr-2 h-4 w-4" />
                        Message on LinkedIn
                      </Button>
                    </div>
                  </div>
                )}
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
            variant="outline"
            asChild
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

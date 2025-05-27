"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypingAnimationProps {
  texts: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export default function TypingAnimation({
  texts,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false)
          setIsDeleting(true)
          return
        }

        if (isDeleting) {
          // Deleting characters
          if (currentText.length > 0) {
            setCurrentText(currentFullText.substring(0, currentText.length - 1))
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        } else {
          // Typing characters
          if (currentText.length < currentFullText.length) {
            setCurrentText(currentFullText.substring(0, currentText.length + 1))
          } else {
            // Finished typing, pause before deleting
            setIsPaused(true)
          }
        }
      },
      isPaused ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="ml-1 text-blue-400"
      >
        |
      </motion.span>
    </div>
  )
}

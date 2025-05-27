"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  opacity: number
  scale: number
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [cursorVariant, setCursorVariant] = useState("default")
  const [particles, setParticles] = useState<Particle[]>([])
  const particleId = useRef(0)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const newX = e.clientX
      const newY = e.clientY

      setMousePosition({ x: newX, y: newY })
      cursorX.set(newX)
      cursorY.set(newY)

      // Add particle trail
      if (Math.random() > 0.7) {
        const newParticle: Particle = {
          id: particleId.current++,
          x: newX + (Math.random() - 0.5) * 20,
          y: newY + (Math.random() - 0.5) * 20,
          opacity: 1,
          scale: Math.random() * 0.5 + 0.5,
        }

        setParticles((prev) => [...prev.slice(-8), newParticle])
      }
    }
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement

      if (target.tagName === "BUTTON" || target.closest("button")) {
        setCursorVariant("button")
        setIsHovering(true)
      } else if (target.tagName === "A" || target.closest("a")) {
        setCursorVariant("link")
        setIsHovering(true)
      } else if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        setCursorVariant("text")
        setIsHovering(true)
      } else {
        setCursorVariant("default")
        setIsHovering(false)
      }
    }

    const handleMouseLeave = () => {
      setCursorVariant("default")
      setIsHovering(false)
    }

    // Add event listeners
    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select')

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [cursorX, cursorY])

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            opacity: particle.opacity - 0.05,
            scale: particle.scale * 0.98,
          }))
          .filter((particle) => particle.opacity > 0),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Hide the default cursor when custom cursor is active, but only on non-touch devices
  useEffect(() => {
    const isTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0
      )
    }
    if (!isTouchDevice()) {
      document.body.style.cursor = "none"
    }
    return () => {
      document.body.style.cursor = ""
    }
  }, [])

  // Don't render custom cursor on small/touch devices
  if (typeof window !== 'undefined') {
    const isTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0
      )
    }
    if (isTouchDevice() || window.innerWidth < 768) {
      return null
    }
  }

  const getCursorSize = () => {
    switch (cursorVariant) {
      case "button":
        return { width: 60, height: 60 }
      case "link":
        return { width: 40, height: 40 }
      case "text":
        return { width: 4, height: 24 }
      default:
        return { width: 32, height: 32 }
    }
  }

  const getCursorColor = () => {
    switch (cursorVariant) {
      case "button":
        return "rgba(59, 130, 246, 0.8)"
      case "link":
        return "rgba(16, 185, 129, 0.8)"
      case "text":
        return "rgba(239, 68, 68, 0.8)"
      default:
        return "rgba(59, 130, 246, 0.6)"
    }
  }

  return (
    <>
      {/* Particle trail */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed pointer-events-none z-[9996] rounded-full"
          style={{
            left: particle.x - 2,
            top: particle.y - 2,
            width: 4,
            height: 4,
            background: `radial-gradient(circle, rgba(59, 130, 246, ${particle.opacity}) 0%, transparent 70%)`,
            scale: particle.scale,
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: -getCursorSize().width / 2,
          y: -getCursorSize().height / 2,
        }}
        animate={{
          width: getCursorSize().width,
          height: getCursorSize().height,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
          mass: 0.5,
        }}
      >
        <div
          className="w-full h-full rounded-full border-2"
          style={{
            background:
              cursorVariant === "text"
                ? getCursorColor()
                : `radial-gradient(circle, ${getCursorColor()} 0%, transparent 70%)`,
            borderColor: getCursorColor(),
            borderRadius: cursorVariant === "text" ? "2px" : "50%",
          }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full border opacity-30"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: -20,
          y: -20,
          borderColor: getCursorColor(),
        }}
        animate={{
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
          x: isHovering ? -40 : -20,
          y: isHovering ? -40 : -20,
          opacity: cursorVariant === "text" ? 0 : 0.3,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
      />

      {/* Magnetic effect for buttons */}
      {cursorVariant === "button" && (
        <motion.div
          className="fixed pointer-events-none z-[9997] rounded-full"
          style={{
            left: cursorXSpring,
            top: cursorYSpring,
            x: -30,
            y: -30,
            width: 60,
            height: 60,
            background: `conic-gradient(from 0deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1), rgba(239, 68, 68, 0.1), rgba(59, 130, 246, 0.1))`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      )}

      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="fixed pointer-events-none z-[9995] rounded-full border-2"
          style={{
            left: mousePosition.x - 15,
            top: mousePosition.y - 15,
            width: 30,
            height: 30,
            borderColor: getCursorColor(),
          }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </>
  )
}

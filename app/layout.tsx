import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import CustomCursor from "../components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Soham Pawar | Web Developer Portfolio",
  icons: {
    icon: '/logo.png',
  },
  description:
    "Professional portfolio of Soham Pawar, a passionate web developer specializing in frontend and backend development.",
    generator: 'v0.dev'
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}

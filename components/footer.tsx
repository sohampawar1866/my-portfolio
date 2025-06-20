export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-4 sm:py-6 mt-12 sm:mt-16">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <p className="text-white/80 text-sm sm:text-base">
          Developed By{" "}
          <a
            href="https://linkedin.com/in/sohampawar1866"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors underline"
          >
            Soham Pawar
          </a>
        </p>
      </div>
    </footer>
  )
}

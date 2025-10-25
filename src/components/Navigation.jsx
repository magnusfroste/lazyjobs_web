import { Briefcase, ArrowRight } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold gradient-text">LazyJobs</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="text-gray-600 hover:text-gray-900 hidden md:block">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 hidden md:block">How It Works</a>
            <a href="#openjobs" className="text-gray-600 hover:text-gray-900 hidden md:block">OpenJobs</a>
            <a 
              href="https://app.lazyjobs.ink" 
              className="btn btn-primary"
            >
              Start Swiping
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

import { Briefcase } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold text-white">LazyJobs</span>
            </div>
            <p className="text-sm">
              The lazy way to land your dream job. Swipe, match, get hired.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
              <li><a href="https://app.lazyjobs.ink" className="hover:text-white">Start Swiping</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#openjobs" className="hover:text-white">About OpenJobs</a></li>
              <li><a href="https://openjobs.froste.eu" className="hover:text-white">Post Jobs Free</a></li>
              <li><a href="https://github.com/magnusfroste" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@lazyjobs.ink" className="hover:text-white">hello@lazyjobs.ink</a></li>
              <li><a href="https://twitter.com/lazyjobs" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a></li>
              <li><a href="https://linkedin.com/company/lazyjobs" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 LazyJobs. Made with ❤️ in Stockholm.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

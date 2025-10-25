import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Get Lazy?
        </h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Join 1,000+ job seekers who found a better way to get hired. 
          Start swiping in less than 2 minutes.
        </p>
        <a 
          href="https://app.lazyjobs.ink" 
          className="btn bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-5 inline-flex"
        >
          Start Swiping Free
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="mt-6 text-blue-100 text-sm">
          No credit card required • 100% Free Forever • 2 min setup
        </p>
      </div>
    </section>
  )
}

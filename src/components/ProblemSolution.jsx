import { CheckCircle2 } from 'lucide-react'

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Job Hunting Sucks. We Fixed It.</h2>
          <p className="text-xl text-gray-600">
            Traditional job boards are overwhelming, time-consuming, and frankly... boring. 
            We made job hunting as easy as swiping on your favorite app.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Old Way */}
          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">😫</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">The Old Way</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600">
                <span className="text-red-500 text-xl">✗</span>
                <span>Spend hours browsing endless job listings</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="text-red-500 text-xl">✗</span>
                <span>Manually compare your skills to requirements</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="text-red-500 text-xl">✗</span>
                <span>Feel overwhelmed and give up</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="text-red-500 text-xl">✗</span>
                <span>Never know what skills to learn next</span>
              </li>
            </ul>
          </div>

          {/* New Way */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 text-6xl opacity-10">✨</div>
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold gradient-text mb-2">The LazyJobs Way</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span><strong>Swipe</strong> through curated matches in 5 minutes</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span><strong>See</strong> exactly which skills you're missing</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span><strong>Learn</strong> with AI-powered recommendations</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span><strong>Get hired</strong> faster with better matches</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

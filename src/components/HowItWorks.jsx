import { ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get Hired in 3 Simple Steps</h2>
          <p className="text-xl text-gray-600">From zero to hired in the laziest way possible.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Upload Your CV</h3>
              <p className="text-gray-600">
                Quick onboarding. We analyze your skills and experience to find perfect matches.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Swipe & Match</h3>
              <p className="text-gray-600">
                Spend 5 minutes a day swiping. See skill gaps. Learn what's missing. Match with jobs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Get Hired</h3>
              <p className="text-gray-600">
                Apply directly from the app. Track your applications. Land your dream job.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a 
              href="https://app.lazyjobs.ink" 
              className="btn btn-primary text-lg px-10 py-5 inline-flex"
            >
              Start Your Journey Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

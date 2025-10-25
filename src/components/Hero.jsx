import { ArrowRight, Star, CheckCircle2, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold">
                ✨ 100% Free Forever
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The <span className="gradient-text">Lazy Way</span> to Get Hired
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Swipe through jobs like Tinder. See your skill gaps. Learn and grow. Get hired. 
              Job hunting has never been this easy—or this fun.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="https://app.lazyjobs.ink" 
                className="btn btn-primary text-lg px-8 py-4 justify-center"
              >
                Start Swiping Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-secondary text-lg px-8 py-4 justify-center"
              >
                See How It Works
              </button>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-red-400 border-2 border-white"></div>
                </div>
                <span className="font-semibold">1,000+ job seekers</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 font-semibold">5.0</span>
              </div>
            </div>
          </div>
          
          {/* Right: Visual */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              {/* Phone Mockup */}
              <div className="mx-auto w-[300px] h-[600px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden">
                  {/* Simulated App Screen */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm">
                    <div className="p-6 text-white">
                      <div className="text-center mb-4">
                        <div className="text-sm opacity-80">Senior Developer</div>
                        <div className="text-2xl font-bold">Google</div>
                      </div>
                      <div className="bg-white/20 rounded-xl p-4 mb-4">
                        <div className="text-sm mb-2">Match Score</div>
                        <div className="text-4xl font-bold">87%</div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>React, TypeScript</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>5+ years experience</span>
                        </div>
                        <div className="flex items-center gap-2 opacity-60">
                          <div className="w-4 h-4 rounded-full border-2"></div>
                          <span>Kubernetes (Learn this!)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 -left-10 animate-pulse">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">Match!</span>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-10 -right-10 animate-pulse delay-150">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-2 text-blue-600">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">+15% Skills</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

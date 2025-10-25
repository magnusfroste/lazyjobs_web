import { Smartphone, Target, TrendingUp, Zap, BarChart3, Heart } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Smartphone,
      title: "Swipe to Match",
      description: "Just like dating apps, but for jobs. Swipe right on opportunities you love, left on ones you don't.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Smart Matching",
      description: "AI learns your preferences and shows you jobs that actually fit your skills and career goals.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "See Skill Gaps",
      description: "Instantly see which skills you have and which ones you need to learn for your dream job.",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Spend just 5 minutes a day. No more hours wasted scrolling through irrelevant listings.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: BarChart3,
      title: "Track Progress",
      description: "Watch your skills grow over time. See how learning new skills opens up more opportunities.",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Heart,
      title: "Actually Fun",
      description: "Job hunting doesn't have to be miserable. We made it engaging, rewarding, and dare we say... fun?",
      gradient: "from-red-500 to-red-600"
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Job Seekers Love LazyJobs</h2>
          <p className="text-xl text-gray-600">Everything you need to land your dream job, nothing you don't.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="card text-center hover:scale-105 transition-transform">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

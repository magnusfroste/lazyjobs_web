import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Frontend Developer",
      text: "I found my dream job in 2 weeks! The skill gap feature helped me learn exactly what I needed. Game changer!",
      gradient: "from-blue-400 to-purple-400"
    },
    {
      name: "Marcus L.",
      role: "Product Manager",
      text: "Finally, job hunting doesn't feel like a chore. I actually look forward to my daily swipe session!",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      name: "Emma K.",
      role: "UX Designer",
      text: "The AI matching is spot on. Every job I swipe right on feels like it was made for me. Love it!",
      gradient: "from-pink-400 to-red-400"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Loved by Job Seekers</h2>
          <p className="text-xl text-gray-600">See what people are saying about LazyJobs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${testimonial.gradient}`}></div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function StatsBar() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">60K+</div>
            <div className="text-blue-100">Active Jobs</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">1K+</div>
            <div className="text-blue-100">Job Seekers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">87%</div>
            <div className="text-blue-100">Match Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">5 min</div>
            <div className="text-blue-100">Daily Usage</div>
          </div>
        </div>
      </div>
    </section>
  )
}

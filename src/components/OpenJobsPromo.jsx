import { Globe, Users, Briefcase, ArrowRight } from 'lucide-react'

export default function OpenJobsPromo() {
  return (
    <section id="openjobs" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Globe className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h2 className="text-4xl font-bold mb-6">Powered by OpenJobs</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              LazyJobs is built on top of <strong>OpenJobs</strong> — an open ecosystem that believes 
              job data should be free and accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Users className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">For Job Seekers</h3>
              <p className="text-gray-300">
                Access 60,000+ jobs from multiple sources. All aggregated, normalized, and free to use.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Briefcase className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">For Companies</h3>
              <p className="text-gray-300">
                Post jobs for free. Reach thousands of qualified candidates. No hidden fees, ever.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Are You a Company?</h3>
                <p className="text-gray-300">
                  Post your jobs on OpenJobs and reach thousands of qualified candidates through LazyJobs and other platforms.
                </p>
              </div>
              <a 
                href="https://openjobs.froste.eu" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-gray-900 hover:bg-gray-100 whitespace-nowrap flex-shrink-0"
              >
                Post Jobs Free
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              OpenJobs aggregates jobs from Arbetsförmedlingen, EURES, Indeed, Remotive, RemoteOK, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

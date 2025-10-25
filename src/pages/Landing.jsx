import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import ProblemSolution from '../components/ProblemSolution'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import OpenJobsPromo from '../components/OpenJobsPromo'
import Testimonials from '../components/Testimonials'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <StatsBar />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <OpenJobsPromo />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  )
}

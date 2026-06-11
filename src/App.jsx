import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import MapSection from './components/MapSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Process />
        <TechStack />
        <Contact />
        <MapSection />
      </main>
      <Footer />
    </>
  )
}

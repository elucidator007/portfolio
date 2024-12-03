import Header from '@/components/Header'
import Main from '@/components/Main'
import About from '@/components/About'
import Experience from '@/components/Experience'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="pt-16">
      <Header />
      <Main />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Education />
      <Footer />
    </main>
  )
}
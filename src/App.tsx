import Header from './components/Header.tsx'
import Hero from './components/Hero'
import About from './components/About.tsx'
import Experience from './components/Experience.tsx'
import Projects from './components/Projects.tsx'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
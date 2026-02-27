import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import LivroVisitas from './components/sections/LivroVisitas'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'


function App() {
  const [lang, setLang] = useState('pt')

  return (
    // O main envolve o conteúdo
    <main className="relative bg-lavender-main min-h-screen w-full">
      <Navbar lang={lang} setLang={setLang} />
      <Home lang={lang} />
      <About lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <LivroVisitas lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      {/* <Navbar />  <--- IMPORTANTE: Comente esta linha também! */}
      {/*<About />*/}
      {/*<Projects />*/}
      {/*<Skills />*/}
      {/*<Contact />*/}
    </main>
  )
}

export default App
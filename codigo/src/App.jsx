import Navbar from './components/layout/Navbar'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
//import Navbar from './components/layout/Navbar'
import Home from './components/sections/Home'
//import About from './components/sections/About'
//import Projects from './components/sections/Projects'
//import Skills from './components/sections/Skills'
//import Contact from './components/sections/Contact'


function App() {
  return (
    // O main envolve o conteúdo
    <main className="relative bg-lavender-main h-screen w-fulle">
      <Home />
       <Navbar /> 
     <About />
     <Projects />
     <Skills />
     <Contact />
      {/* <Navbar />  <--- IMPORTANTE: Comente esta linha também! */}
      {/*<About />*/}
      {/*<Projects />*/}
      {/*<Skills />*/}
      {/*<Contact />*/}
    </main>
  )
}

export default App
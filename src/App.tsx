import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Interests from './components/Interests'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Interests />
      <About />
      <Experience />
      <Projects />
      <div className='bg-rachelCream w-full h-[15vh]'></div>
    </>
  )
}

export default App

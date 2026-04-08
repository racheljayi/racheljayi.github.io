import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import Interests from './components/interests'
import About from './components/about'
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

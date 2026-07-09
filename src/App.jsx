import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Bio from './components/Bio';
import Experience from './components/Experience';
import Music from './components/Music'; 

function App() {
  return (
    <div className="bg-linear-to-br from-gray-800 via-gray-900 to-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Bio />
      <Experience />
      <Projects />
      <Music />
  
    </div>
  )
}

export default App;
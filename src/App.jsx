import Home from "./Home"
import About from "./About"
import Footer from "./Footer"
import {Routes, Route} from "react-router-dom"
import Navbar from "./Navbar"
import Programs from "./Programs"
import Events from "./Events"
import Gallery from "./Gallery"
import Donate from "./Donate"

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donate" element={<Donate />} />
       
    </Routes>
    <Footer/>
    </>
  )
}

export default App

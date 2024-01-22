import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Sidebar from "./components/sidebar/Sidebar"
import Header from "./components/Header/Header"
import Education from "./pages/Education"
import Skills from "./pages/Skills"
import Interests from "./pages/Interests"

function App() {
 

  return (
    <Router>
      <Header/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/interest" element={<Interests/>}/>
      </Routes>
      
    </Router>
  )
}

export default App

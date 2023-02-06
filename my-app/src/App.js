import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Navbar';
import Main from './Components/Main';
import About from './Pages/about';
import Projects from './Pages/projects'
import Contact from './Pages/contact'
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path = "/" element= {<Main/>}/>
        <Route path = "/about" element= {<About/>}/>
        <Route path = "/projects" element= {<Projects/>}/>
        <Route path = "/contact" element= {<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;

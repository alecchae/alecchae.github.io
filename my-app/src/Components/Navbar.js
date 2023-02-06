import {Link} from "react-router-dom"
import './Navbar.css'

export default function Navbar(){
    return <nav className="nav">
        <Link to="/" className="home"> Home </Link>
            <li>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </li>
    </nav>
}

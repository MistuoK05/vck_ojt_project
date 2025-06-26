import {Link} from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling
import { useState } from 'react';
const Header =() =>{
  const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu=()=> {
  const navlink = document.getElementById("navlink");
  if (navlink) {
    navlink.classList.toggle("active");
    setMenuOpen(!menuOpen); // toggles the icon

  }
}
  return(
    <div>
      <header>
          <div className="navbar">
            <div className="logo"><a href="/home">Vivekanand College</a></div><br/>
            <div className="menu" onClick={toggleMenu}>{menuOpen ? '✖' : '☰'}</div>
             <ul className="nav" id="navlink">
            <li className="nav-item"><Link to="/home">Home</Link></li>
           <li className="nav-item"><Link to="/about">About</Link></li>
           <li className="nav-item"><Link to="/courses">Courses</Link></li>
           <li className="nav-item"><Link to="/contact">Contact</Link></li>
           <li className="btn1"><Link to="/apply">Apply Now!</Link></li>
          </ul>
          

        </div>
        
      </header>
    </div>
  )
}
export default Header;
import {Link} from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling
const Header =() =>{
  function toggleMenu(){
    document.querySelector('.nav').classList.toggle('active');
  }
  return(
    <div>
      <header>
          <div className="navbar">
            <div className="logo"><a href="/home">Vivekanand College</a></div><br/>
             <ul className="nav">
            <li className="nav-item"><Link to="/home">Home</Link></li>
           <li className="nav-item"><Link to="/about">About</Link></li>
           <li className="nav-item"><Link to="/courses">Courses</Link></li>
           <li className="nav-item"><Link to="/contact">Contact</Link></li>
           <li className="btn1"><Link to="/apply">Apply Now!</Link></li>
            </ul>
          <div className="menu" onClick={toggleMenu}>☰</div>

           
           
        </div>
        
      </header>
    </div>
  )
}
export default Header;
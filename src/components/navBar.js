import React,{useState} from 'react';
import './navBar.css'
const NavBar = () => {
    const [toggleMenu,setToggleMenu] = useState(false)
    return(
        <div className="navBar">
         <div className="navContainer">
             <h1>Jibin</h1>
             <button onClick={()=>setToggleMenu(!toggleMenu)} className="bar">open</button>
                 <ul className={toggleMenu?'navbar-menu active':"navbar-menu"}>
                     <li>Services</li>
                     <li>Works</li>
                     <li>Contact</li>
                 </ul>
         </div>
        </div>
    )
}
export default NavBar;
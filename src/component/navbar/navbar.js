import "./navbar.css"
import React from "react"
function Navbar(){
    return(
        <div id="navbar">
            <a href="#home" style={{textDecoration:"none",color:"white"}}>home</a>
            <a href="#about" style={{textDecoration:"none",color:"white"}} >about</a>
            <a href="#about"  style={{textDecoration:"none",color:"white"}}>about</a>
            <a href="#project" style={{textDecoration:"none",color:"white"}}>project</a>
            <a href="#contact" style={{textDecoration:"none",color:"white"}}>contact</a>
            <a href="#resume" style={{textDecoration:"none",color:"white"}}>resume</a>
        </div>
    )
}
export default Navbar
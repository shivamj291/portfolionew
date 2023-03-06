import "./navbar.css"
import React from "react"
function Navbar(){
    return(
        <div id="navbar">
            <a href="#home" style={{textDecoration:"none",color:"white"}}>home</a>
            <a href="#about"  style={{textDecoration:"none",color:"white"}}>about</a>
            <a href="#skill" style={{textDecoration:"none",color:"white"}}>skills</a>
            <a href="#project" style={{textDecoration:"none",color:"white"}}>project</a>
            <a href="#static" style={{textDecoration:"none",color:"white"}}>statics</a>
            <a href="#contact" style={{textDecoration:"none",color:"white"}}>contact</a>
           
        </div>
    )
}
export default Navbar
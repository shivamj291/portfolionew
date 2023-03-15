import "./navbar.css"
import React from "react"
import {Link} from "react-router-dom"
function Navbar(){
    return(
        <div id="navbar">
            <Link to="/" style={{textDecoration:"none",color:"white"}}>home</Link>
            <Link to="/about"  style={{textDecoration:"none",color:"white"}}>about</Link>
            <Link to="/skill" style={{textDecoration:"none",color:"white"}}>skills</Link>
            <Link to="/project" style={{textDecoration:"none",color:"white"}}>project</Link>
            <Link to="/static" style={{textDecoration:"none",color:"white"}}>statics</Link>
            <Link to="/contact" style={{textDecoration:"none",color:"white"}}>contact</Link>
           
        </div>
    )
}
export default Navbar
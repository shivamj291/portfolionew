import About from "../component/About/About";
import { Route,Routes } from "react-router-dom";
import Contact from "../component/Contact/Contact";
import Front from "../component/Front/Front";
import Navbar from "../component/navbar/navbar";
import Project from "../component/Project/Project";
import Skill from "../component/Skills/Skill";
import Static from "../component/Statics/Statics";
import Home from "../component/Home/Home";
function Router(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/skill" element={<Skill/>}/>
                <Route path="/static" element={<Static/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    )
}
export default Router

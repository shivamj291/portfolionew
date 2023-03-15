import About from "../About/About"
import Contact from "../Contact/Contact"
import Front from "../Front/Front"
import Project from "../Project/Project"
import Skill from "../Skills/Skill"
import Static from "../Statics/Statics"


function Home(){
    return(
        <div id="Home">
            <Front/>
            <hr/>
            <About/>
            <hr/>
            <Skill/>
            <hr/>
            <Project/>
            <hr/>
            <Static/>
            <hr/>
            <Contact/>
            <hr/>
        </div>
    )
}
export default Home
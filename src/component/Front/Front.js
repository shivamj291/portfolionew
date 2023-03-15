import About from "../About/About"
import Contact from "../Contact/Contact"
import Project from "../Project/Project"
import Skill from "../Skills/Skill"
import Static from "../Statics/Statics"
import "./Front.css"

function Front(){
    return(
        <div id="Front">
            <div id="font_heading">
            <div id="hoverdiv">
            <img src="https://readme-typing-svg.herokuapp.com?+Daughter&amp;color=rgb(255, 255, 255)&amp;size=20&amp;lines=👋Hey!+It's+SHIVAM+JAISWAL!;Full+Stack-Web+Developer...👨🏻‍💻;" id="hoverpart"/>
                  
            </div>
          
                    {/* <h6 id="h6_first">I am from Raisen, Madhya Pradesh </h6>
                    <h6 className="next">Phone - 9399849603</h6>
                    <h6 className="next"> Email -Shivamj291@gmail.com</h6> */}

                    <div id="social">
                        <a href="https://github.com/shivamj291"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></a>
                        <a href="https://www.linkedin.com/in/shivam-jaiswal-43364a23b"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/></a>
                        <a href="shivamj291@gmail.com"><img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"/></a>
                    </div>
                   <div id="resume"><a href="resume.pdf"><p>Resume</p></a></div>

                   
                   
            </div>
            <div id="image">
                  <img src="shivam.jpg"/>
            </div>
        </div>
    )
}
export default Front
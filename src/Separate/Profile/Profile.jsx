

import style from "./Profile.module.css"

function Profile(){
     return(
        <div id={style.Profile}  >
            <img src="shivam.jpg" id={style.pimg}/>
            <img src="https://readme-typing-svg.herokuapp.com?font=Architects+Daughter&amp;color=ff0000&amp;size=20&amp;lines=👋Hey!+It's+SHIVAM+JAISWAL!;Full+Stack-Web+Developer...👨🏻‍💻;"/>
        </div>
    )
}

export default Profile
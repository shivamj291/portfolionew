import "./Statics.css"
function Static(){
    return(
        <div id="static"> 

            <div> 
                <h1 style={{textDecoration:"underline"}}>Statics</h1>
                <img src="statics.png" id="staticimg" />
            </div>
            <div>
                <h1 style={{textDecoration:"underline"}}>Graph</h1>
                <img src="graph.png" id="graph"/>
            </div>
        </div>
    )
}
export default Static
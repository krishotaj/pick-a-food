//import axios?
//import Navbar
//import Footer
import data from "./Data"


function centralCard(){
    return <div>
        <div className="container">
          {/*background img:https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fhd-wallpaper-desktop-ergzh&psig=AOvVaw1WTWw2mjp-Eji7mn3GlyUc&ust=1719864698515000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNiT4MCRhIcDFQAAAAAdAAAAABAE*/}
          <div className="central-card">
            <h1>Pick-a-Food</h1>
            <p>Can't decide what you want to eat? Don't worry!</p>
            <p>I got your back! Just click "HALP" and I will choose for you!</p>
            <button className="btn-halp" onClick={/*something*/}>HALP</button>
          </div>
      </div>
    </div>
}
//1)create a function for onClick(random pick)
function btnHalp(data){
  return <div>
    {/*should use handle on click or something*/}
  </div>
}
//2)create a function for how the page 
//  will look like after the onClick(with the background of the result)

//3)create a function for the reroll button that will start the roll
//  again in the same page 


export default centralCard
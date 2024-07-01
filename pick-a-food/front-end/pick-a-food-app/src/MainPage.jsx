//import axios?
//import Navbar
//import Footer
import data from "./Data"
import axios from "axios"
import React, {useState} from "react";


function MainPage(){
    const [result, setResult] = useState() 
    const [foodId, setFoodId] = useState()

//1)create a function for onClick(random pick = math.Random)
   function btnHalp(data){
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomFood = data[randomIndex];
      setFoodId(randomFood.id)
      setResult(randomFood)
   }
//2)create a function for the save button
function saveFood(){
  axios.post('/api/save-food', {foodId}).then(res => {
    console.log(res)
    })
    .catch(err => {
      console.log(err)
      })
  }
//3)create a function for the reroll button that will start the roll
//  again in the same page 
function reroll(){
    btnHalp(data)
}
//4)render the result after the ''HALP'' click
function renderResult() {
  if (result) {
    return (
      <div className="result">
        <h2 className="after-click-title">You will eat: {result.name}</h2>
        <p className="after-click-subtitle">You're welcome!</p>
        <button className="save-button" onClick={() => saveFood(result.id)}>Save</button>
        <button className="reroll-button" onClick={() => reroll()}>Reroll</button>
      </div>
      )
    }
}


return <div>
        <div className="container">
          {/*background img:https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fhd-wallpaper-desktop-ergzh&psig=AOvVaw1WTWw2mjp-Eji7mn3GlyUc&ust=1719864698515000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNiT4MCRhIcDFQAAAAAdAAAAABAE*/}
          <div className="central-card">
            <h1 className="header">Pick-a-Food</h1>
            <p className="p1">Can't decide what you want to eat? Don't worry!</p>
            <p className="p2">I got your back! Just click "HALP" and I will choose for you!</p>
            <button className="btn-halp" onClick={()=> btnHalp(data)}>HALP</button>
            {renderResult()}
          </div>
      </div>
    </div>
}





export default MainPage
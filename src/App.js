// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import bmiImage from "./assets/bmi.jpg";

function App() {
  const[height,setHeight]=useState();
  const[weight,setWeight]=useState();
  const[bmiResult,setBmiResult]=useState();
  const[errorMsg,setErrorMsg]=useState("");
  const[weightCatagory,setWeightCatagory]=useState("sdvf");


  const calculateBmi=()=>{
    const validHeight=/^(0|[1-9]\d*)$/.test(height);
    console.log(validHeight);
    const validWeight=/^(0|[1-9]\d*)$/.test(weight);
    console.log(validWeight);
    const heightInMeters=height/100;
     var bmicalc=weight/(heightInMeters *heightInMeters)
    
    if(validHeight!=="" && validWeight!=="")
    {
      setBmiResult(bmicalc.toFixed(2))
    }
    else{
      setBmiResult("");
    }
    if(validHeight && validWeight)
    {
      setErrorMsg("");
    }
    else
    {
      setErrorMsg("enter valid height&weight!..")
    }

    if(bmiResult<18.5)
    {
      setWeightCatagory("UnderWeight");
    }
    else if(bmiResult>18.5 && bmiResult <25.0)
    {
      setWeightCatagory("Normal Weight");
    }
    else if(bmiResult>25.0 && bmiResult<29.9)
    {
      setWeightCatagory("Over Weight..");
    }
    else if(bmiResult>30.0)
    {
      setWeightCatagory("Obese");
    }
  }

  return (
    <>
      <div className="container">
        <div className="bmi-img">
          {/* <img src={bmiImage} alt="loadimage" width="500px" height="400px" />udfsb */}
        </div>
        <div className="bmi-calculation">
          <div><p className="heading">Bmi Calculator</p></div>
          <div className="error-msg">{errorMsg &&<p>enter valid height & weight!..</p>}</div>
          <div className="input-container">
            <label>Person Height:</label>
            <input name="height"  value={height} onChange={(e)=>{setHeight(e.target.value)}} />
          </div>
          <div className="input-container">
            <label>Person Weight:</label>
            <input type="text" name="weight" value={weight} onChange={(e)=>{setWeight(e.target.value)}}/>
          </div>
          <div className="calculate-btn">
            <button onClick={calculateBmi}>Calculate Bmi</button>
          </div>
          {bmiResult&& !errorMsg&& <div className="bmi-result">
          <p>Your BMI is: <span>{bmiResult}</span></p>
          <p>Result: <span>{weightCatagory}</span></p>
          </div>}
        </div>
      </div>
    </>
  );
}

export default App;

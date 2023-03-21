import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let imgSrc;

  if (bmi < 1) {
    imgSrc = null;
  } else if (bmi < 25) {
    imgSrc = require("../src/assets/underweight.png");
  } else if (bmi >= 25 && bmi < 30) {
    imgSrc = require("../src/assets/healthy.png");
  } else {
    imgSrc = require("../src/assets/overweight.png");
  }

  let calBmi = e => {
    e.preventDefault();

    if (weight === 0 || !height === 0) {
      alert("Enter valid details");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      //logic for message

      if (bmi < 25) {
        setMessage("You are underweight.");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy person.");
      } else {
        setMessage("You are overweight.");
      }
    }
  };

  const reset = () => {
    window.location.reload();
  };

  const weightInput = e => {
    setWeight(e.target.value);
  };

  const heightInput = e => {
    setHeight(e.target.value);
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              value={weight}
              onChange={weightInput}
              type="number"
              min="1"
            ></input>
          </div>
          <div>
            <label>Height (in)</label>
            <input
              value={height}
              onChange={heightInput}
              type="number"
              min="1"
            ></input>
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={reset}>
              Reset
            </button>
          </div>
        </form>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className="img-container">
          <img src={imgSrc} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;

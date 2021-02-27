import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';



function Understanding() {
  const history = useHistory();//use as a variable to .push




  const nextButton = () => {//when clicked to this
    console.log("nextButton")
    let x = document.getElementById("myInput").value; 
    if(x === ''){
      alert("Add Input Value")
      console.log("missing input")
    }else{
      console.log("else statement")
      history.push('/Support')//bring me to page ___
    }

  }

  return(
    <>
    <p>understanding</p>

    <input
    type="number"
    id='myInput'
    />

    <button onClick={nextButton}>Next</button>

    </>

  )
}


export default Understanding;
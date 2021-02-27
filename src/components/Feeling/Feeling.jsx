import {useState, useEffect} from 'react';
import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';


function Feeling() {
  const history = useHistory();//use as a variable to .push



  const nextButton = () => {//when clicked to this
    console.log("nextButton")
    history.push('/')//bring me to page ___

  }

  return (
    <>
    <h1>How are you feeling today?</h1>

    <input
    type="number"
    />

    <button onClick={nextButton}>Next</button>

    </>
    )
}

export default Feeling;
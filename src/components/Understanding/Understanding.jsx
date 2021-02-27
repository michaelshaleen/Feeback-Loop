import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';



function Understanding() {
  const history = useHistory();//use as a variable to .push




  const nextButton = () => {//when clicked to this
    console.log("nextButton")
    history.push('/Support')//bring me to page ___

  }

  return(
    <>
    <p>understanding</p>

    <input
    type="number"
    />

    <button onClick={nextButton}>Next</button>

    </>

  )
}


export default Understanding;
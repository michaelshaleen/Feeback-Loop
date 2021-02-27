import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {  useDispatch, useSelector } from 'react-redux';




function Understanding() {
  const history = useHistory();//use as a variable to .push

  //const = useSelector(store => store.);




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
    console.log(FeedbackToAdd,"object")


  }

  const handleUnderstanding = (event) => {
    console.log('Understanding', event.target.value);
    setFeedbackToAdd({
      ...FeedbackToAdd,
      understanding: event.target.value,
    });
    console.log(FeedbackToAdd,"object")
  };




  return(
    <>
    <p>understanding</p>

    <input
    type="number"
    id='myInput'
    onChange={handleUnderstanding}
    max='5'
    />

    <button onClick={nextButton}>Next</button>

    </>

  )
}


export default Understanding;
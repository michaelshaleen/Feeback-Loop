import {useState, useEffect} from 'react';
import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
//import Understanding from '../Understanding/Understanding';
import { useDispatch, useSelector } from 'react-redux';


function Feeling() {
  const dispatch = useDispatch();
  const history = useHistory();//use as a variable to .push
  const feeling = useSelector((store) => {
    return store.feelingReducer;
});
// grab feelingReducer value from redux state

  const nextButton = (event) => {//when clicked to this
    //console.log("nextButton");
    let x =   document.getElementById("myInput").value; 
    //console.log(x);
    if(x === ''){
      alert("Add Input Value")
      console.log("missing input")
    }else{
      //console.log("else statement")
      history.push('/Understanding')//bring me to page ___
    }
    //console.log(feeling,"feeling")
  }

  const handleFeeling = (event) => {
    console.log('Feeling', feeling);
    console.log(event, 'HERE')
    dispatch({
      type: 'ADD_FEELING',
      payload: feeling,
    });
    // setFeedbackToAdd({
    //   ...feeling,
    //   feeling: event.target.value,
    // });
    nextButton();
 console.log(feeling,"feeling")
  };

  return (
    <>
    <h1>How are you feeling today?</h1>
      <input
      type='number'
      id='myInput'
      //onChange={handleFeeling}
      max='5'
      />

      <button onClick={handleFeeling}>Next</button>
    </>
    )
}

export default Feeling;


{/* <input
    onChange={(event) => handleChange(event)}
    placeholder='GitHub username'
    value={editStudent.github_name}
  /> */}
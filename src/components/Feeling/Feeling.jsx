import {useState, useEffect} from 'react';
import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
//import Understanding from '../Understanding/Understanding';
import { useDispatch } from 'react-redux';


function Feeling() {
  const dispatch = useDispatch();
  const history = useHistory();//use as a variable to .push
  const [input, setInput] = useState();
  let [FeedbackToAdd, setFeedbackToAdd] = useState({
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
  });


  const nextButton = (event) => {//when clicked to this
    console.log("nextButton");
    dispatch({
      type: 'ADD_FEELING',
      payload: FeedbackToAdd,
    });
    setFeedbackToAdd({
      ...FeedbackToAdd,
      feeling: event.target.value,
    });
    
    let x =   document.getElementById("myInput").value; 
    console.log(x);
    if(x === ''){
      alert("Add Input Value")
      console.log("missing input")
    }else{
      console.log("else statement")
      history.push('/Understanding')//bring me to page ___
    }
    console.log(FeedbackToAdd,"object")

  }
  //if input is empty we want an alert?
  //what is !target.value??


  const handleFeeling = (event) => {
    console.log('Feeling', event.target.value);
    dispatch({
      type: 'ADD_FEELING',
      payload: FeedbackToAdd,
    });
    setFeedbackToAdd({
      ...FeedbackToAdd,
      feeling: event.target.value,
    });
    console.log(FeedbackToAdd,"object")
  };

  return (
    <>
    <h1>How are you feeling today?</h1>
  


    <input
    type='number'
    id='myInput'
    onChange={handleFeeling}
    max='5'
       />

    <button onClick={nextButton}>Next</button>


    </>
    )
}

export default Feeling;
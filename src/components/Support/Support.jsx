import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';



function Support() {
  const dispatch = useDispatch();


  const history = useHistory();
  let [FeedbackToAdd, setFeedbackToAdd] = useState({
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
  });

  const nextButton = () => {//when clicked to this
    console.log("nextButton")
    let x = document.getElementById("myInput").value; 
    if(x === ''){
      alert("Add Input Value")
      console.log("missing input")
    }else{
      console.log("else statement")
      history.push('/Comments')//bring me to page ___
    }
  }

  const handleSupport = () => {
    console.log("Support", event.target.value);
    dispatch({
      type:'ADD_SUPPORT',
      payload: FeedbackToAdd,
    });
    setFeedbackToAdd({
      ...FeedbackToAdd,
      support: event.target.value,
    });
    console.log(FeedbackToAdd, "object")
  }


  return(
    <>

    <p>Support</p>

    <input
    type="number"
    id='myInput'
    onChange={handleSupport}
    max='5'
    />
    <button onClick={nextButton}>Next</button>

</>
  )
}

export default Support;
import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {useState, useEffect} from 'react';


function Comments() {
const history = useHistory();
const dispatch = useDispatch();
let [FeedbackToAdd, setFeedbackToAdd] = useState({
  feeling: '',
  understanding: '',
  support: '',
  comments: '',
});


  const nextButton = () => {//when clicked to this
    console.log("nextButton")
    history.push('/Review')//bring me to page ___
  }

 const handleComments = (event) => {
   console.log("Comments", event.target.value);
   dispatch({
     type: 'ADD_COMMENTS',
     payload: FeedbackToAdd,
   });
   setFeedbackToAdd({
     ...FeedbackToAdd,
     comments: event.target.value,
   });
   console.log(FeedbackToAdd, "object")

   
 }


  return(
    <>

    <p>Comments</p>

    <input
    type="text"
    id='myInput'
    onChange={handleComments}
    />

    <button onClick={nextButton}>Next</button>
</>
  )
}

export default Comments;
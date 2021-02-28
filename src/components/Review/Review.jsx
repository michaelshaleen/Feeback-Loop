import {  useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import axios from 'axios';



function Review() {
  const feedbackInfo = useSelector((store) => {
    return store;
  });
  console.log(feedbackInfo, "feedbackInfo")
  console.log(feedbackInfo.feelingReducer, "feedbackInfo")
  const history = useHistory();//use as a variable to .push


  const submitBtn = () => {
    axios({
      method: 'POST',
      url:'/feedback',
      data: {
        feeling: feedbackInfo.feelingReducer,
        understanding: feedbackInfo.understandingReducer,
        support: feedbackInfo.supportReducer,
        comments: feedbackInfo.commentsReducer
      }
    })
    .then(response => {
      console.log("created");
    })
    .catch(error => {
      console.log("post failed", error)
    })
    history.push('/Success')
  }


  const backBtn = () => {
    history.push('/Comments')
  }
  return(
    <>
      <h2>Review Your Feedback</h2>
      
        <p>Feeling: {feedbackInfo.feelingReducer}</p>
        <p>Understanding:{feedbackInfo.understandingReducer} </p>
        <p>Support: {feedbackInfo.supportReducer} </p>
        <p>Comments:{feedbackInfo.commentsReducer} </p>
    
      <button onClick={submitBtn}>Submit</button>
      <button onClick={backBtn}>Back</button>

    </>
  )
}

export default Review;

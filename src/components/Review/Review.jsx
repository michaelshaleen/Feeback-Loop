import {  useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';



function Review() {

  const feedbackInfo = useSelector((store) => {
    return store;
  });




  console.log(feedbackInfo, "feedbackInfo")
  console.log(feedbackInfo.feelingReducer, "feedbackInfo")

  const history = useHistory();//use as a variable to .push


  const submitBtn = () => {
    history.push('/Success')
  }
  return(
    <>
    <h2>Review Your Feedback</h2>
    
      <p>Feeling: {feedbackInfo.feelingReducer}</p>
      <p>Understanding:{feedbackInfo.understandingReducer} </p>
      <p>Support: {feedbackInfo.supportReducer} </p>
      <p>Comments:{feedbackInfo.commentsReducer} </p>
  
    <button onClick={submitBtn}>Submit</button>
    </>
  )
}

export default Review;



// run a get to grab all input data from 
// the server or from the DB
//find routes to DB using get
import {  useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';



function Review() {

  const feedbackInfo = useSelector(store => store);
  console.log(feedbackInfo, "feedbackInfo")
  const history = useHistory();//use as a variable to .push



  const submitBtn = () => {
    history.push('/Success')
  }
  return(
    <>
    <h2>Review Your Feedback</h2>
    
      <p>Feeling: {feedbackInfo.feeling}</p>
      <p>Understanding: </p>
      <p>Support: </p>
      <p>Comments: </p>
  
    <button onClick={submitBtn}>Submit</button>
    </>
  )
}

export default Review;



// run a get to grab all input data from 
// the server or from the DB
//find routes to DB using get
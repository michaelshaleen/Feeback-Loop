import {  useDispatch, useSelector } from 'react-redux';



function Review() {

  const feedbackInfo = useSelector(store => store);
  console.log(feedbackInfo, "feedbackInfo")

  return(
    <>
    <h2>Review Your Feedback</h2>
    
      <p>Feeling: {feedbackInfo.feeling}</p>
      <p>Understanding: </p>
      <p>Support: </p>
      <p>Comments: </p>
  
    <button>Submit</button>
    </>
  )
}

export default Review;



// run a get to grab all input data from 
// the server or from the DB
//find routes to DB using get
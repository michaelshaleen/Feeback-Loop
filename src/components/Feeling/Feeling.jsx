import {useState, useEffect} from 'react';
import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Feeling() {
  const dispatch = useDispatch();
  const history = useHistory();//use as a variable to .push
  const [feeling, setFeeling] = useState('');
// grab feelingReducer value from redux state
  const nextButton = (event) => {
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
    event.preventDefault();
    //console.log('Feeling', feeling);
    dispatch({
      type: 'ADD_FEELING',
      payload: feeling,
    });
    // setFeedbackToAdd({
    //   ...feeling,
    //   feeling: event.target.value,
    // });
    nextButton();
 //console.log(feeling,"feeling")
  };





  return (
    <>
    <h1>How are you feeling today?</h1>

    <form onSubmit={handleFeeling}>

      <input
      type='number'
      id='myInput'
      value={feeling}
      onChange={(evt) => setFeeling(event.target.value)}
      //onChange={handleFeeling}
      max='5'
      min='1'
      style={{width:'100px'}}


      />
      <p>Feeling: {feeling}</p>
      <button>Next</button>
      </form>
    </>
    )
}

export default Feeling;


{/* <input
    onChange={(event) => handleChange(event)}
    placeholder='GitHub username'
    value={editStudent.github_name}
  /> */}
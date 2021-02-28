import {useState, useEffect} from 'react';
import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();//use as a variable to .push
  const [understanding, setUnderstanding] = useState('');
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
      history.push('/Support')//bring me to page ___
    }
    //console.log(feeling,"feeling")
  }

  const handleUnderstanding = (event) => {
    event.preventDefault();
    //console.log('Feeling', feeling);
    dispatch({
      type: 'ADD_UNDERSTANDING',
      payload: understanding,
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
    <h1>How well do you understand the content</h1>

    <form onSubmit={handleUnderstanding}>

      <input
      type='number'
      id='myInput'
      value={understanding}
      onChange={(evt) => setUnderstanding(event.target.value)}
      //onChange={handleFeeling}
      max='5'
      min='1'
      style={{width:'100px'}}
      />
      <p>Understanding: {understanding}</p>
      <button>Next</button>
      </form>
    </>
    )
}

export default Understanding;


{/* <input
    onChange={(event) => handleChange(event)}
    placeholder='GitHub username'
    value={editStudent.github_name}
  /> */}
import {useState, useEffect} from 'react';
import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Support() {
  const dispatch = useDispatch();
  const history = useHistory();//use as a variable to .push
  const [support, setSupport] = useState('');
// grab feelingReducer value from redux state
  const nextButton = (event) => {
    let x =   document.getElementById("myInput").value; 
    if(x === ''){
      alert("Add Input Value")
      console.log("missing input")
    }else{
      history.push('/Comments')//bring me to page ___
    }
  }

  const handleSupport = (event) => {
    event.preventDefault();
    //console.log('Feeling', feeling);
    dispatch({
      type: 'ADD_SUPPORT',
      payload: support,
    });
   
    nextButton();
  };


  return (
    <>
    <h1>How well are you being supported</h1>

    <form onSubmit={handleSupport}>

      <input
      type='number'
      id='myInput'
      value={support}
      onChange={(evt) => setSupport(event.target.value)}
      max='5'
      />
      <p>Support: {support}</p>
      <button>Next</button>
      </form>
    </>
    )
}

export default Support;


{/* <input
    onChange={(event) => handleChange(event)}
    placeholder='GitHub username'
    value={editStudent.github_name}
  /> */}
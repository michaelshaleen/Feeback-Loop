import {useState, useEffect} from 'react';
import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Feeling() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [feeling, setFeeling] = useState('');


  const nextButton = (event) => {
    let x = document.getElementById("myInput").value; 
     if(x === ''){
      alert("Add Input Value")
      console.log("missing input")
    }
    else{
       history.push('/Understanding')
    }
  }

  const handleFeeling = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_FEELING',
      payload: feeling,
    });   
    nextButton();
  };





  return (
    <>
      <h1>How are you feeling today?</h1>
      <form onSubmit={handleFeeling}>
        <input
          type='number'
          id='myInput'
          value={feeling}
          onChange={(event) => setFeeling(event.target.value)}
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

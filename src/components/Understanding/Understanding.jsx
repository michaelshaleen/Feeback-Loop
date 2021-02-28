import {useState, useEffect} from 'react';
import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [understanding, setUnderstanding] = useState('');
  const nextButton = (event) => {
    let x =   document.getElementById("myInput").value; 
    if(x === ''){
      alert("Add Input Value")
      console.log("missing input")
    }else{
      history.push('/Support')
    }
  }

  const handleUnderstanding = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_UNDERSTANDING',
      payload: understanding,
    });
    nextButton();
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



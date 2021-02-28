import {useState, useEffect} from 'react';
import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Support() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [support, setSupport] = useState('');
  const nextButton = (event) => {
    let x =   document.getElementById("myInput").value; 
    if(x === ''){
      alert("Add Input Value")
      console.log("missing input")
    }else{
      history.push('/Comments')
    }
  }

  const handleSupport = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_SUPPORT',
      payload: support,
    });
    nextButton();
  };

  const backBtn = () => {
    history.push('/Understanding')
  }


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
          min='1'
          style={{width:'100px'}}
        />
        <p>Support: {support}</p>
        <button>Next</button>
      </form>
      <button onClick={backBtn}>Back</button>

    </>
    )
}

export default Support;


{/* <input
    onChange={(event) => handleChange(event)}
    placeholder='GitHub username'
    value={editStudent.github_name}
  /> */}
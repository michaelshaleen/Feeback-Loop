import {useState, useEffect} from 'react';
import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import Understanding from '../Understanding/Understanding';

function Feeling() {
  const history = useHistory();//use as a variable to .push
const [input, setInput] = useState();


  const nextButton = (input) => {//when clicked to this
    console.log("nextButton");
    console.log(input);
    if(input === 1){
      alert("Add Input Value")
    }else{
      console.log("else statement")
      history.push('/Understanding')//bring me to page ___
    }
  }
  //if input is empty we want an alert?
  //what is !target.value??

  return (
    <>
    <h1>How are you feeling today?</h1>
  


    <input
    type="number"
    onChange={handleInput}
        />

    <button onClick={nextButton}>Next</button>


    </>
    )
}

export default Feeling;
import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';



function Support() {

  const history = useHistory();
  const nextButton = () => {//when clicked to this
    console.log("nextButton")
    let x = document.getElementById("myInput").value; 
    if(x === ''){
      alert("Add Input Value")
      console.log("missing input")
    }else{
      console.log("else statement")
      history.push('/Comments')//bring me to page ___
    }
  }


  return(
    <>

    <p>Support</p>

    <input
    type="number"
    id='myInput'
    max='5'
    />
    <button onClick={nextButton}>Next</button>

</>
  )
}

export default Support;
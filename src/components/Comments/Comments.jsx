import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';



function Comments() {
const history = useHistory();
  const nextButton = () => {//when clicked to this
    console.log("nextButton")
    let x = document.getElementById("myInput").value; 
    if(x === ''){
      alert("Add Input Value")
      console.log("missing input")
    }else{
      console.log("else statement")
      history.push('/Feeling')//bring me to page ___

    }



  }


  return(
    <>

    <p>Comments</p>

    <input
    type="text"
    id='myInput'
    />

    <button onClick={nextButton}>Next</button>
</>
  )
}

export default Comments;
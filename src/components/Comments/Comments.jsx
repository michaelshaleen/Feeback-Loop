import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';



function Comments() {
const history = useHistory();
  const nextButton = () => {//when clicked to this
    console.log("nextButton")
    history.push('/Review')//bring me to page ___
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
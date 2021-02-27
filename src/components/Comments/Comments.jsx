import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';



function Comments() {
const history = useHistory();
  const nextButton = () => {//when clicked to this
    console.log("nextButton")
    history.push('/Feeling')//bring me to page ___

  }


  return(
    <>

    <p>Comments</p>

    <button onClick={nextButton}>Next</button>
</>
  )
}

export default Comments;
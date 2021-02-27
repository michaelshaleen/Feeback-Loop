import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';



function Support() {

  const history = useHistory();
  const nextButton = () => {//when clicked to this
    console.log("nextButton")
    history.push('/Comments')//bring me to page ___

  }


  return(
    <>

    <p>Support</p>

    <input
    type="number"
    />
    <button onClick={nextButton}>Next</button>

</>
  )
}

export default Support;
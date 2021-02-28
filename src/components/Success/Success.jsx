import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';


function Success () {
  const history = useHistory();


  const goHome = () => {
    history.push('/')
  }

  return(
      <>
        <p>Submission Complete!</p>
        <button onClick={goHome}>Go Home</button>
        <img
          src='https://parkpride.files.wordpress.com/2013/11/success-kid.jpg' 
          alt="Boy rejoicing in success">
        </img>
      </>
  )
}

export default Success;
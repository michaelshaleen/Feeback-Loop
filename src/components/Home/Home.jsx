import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';



function Home() {
  const history = useHistory();


  const begin = () => {
    history.push('/Feeling')
  }

  
  return(
    <>
      <h2>Home Page</h2>
      <button onClick={begin}>Begin</button>
    </>
  )
}

export default Home;
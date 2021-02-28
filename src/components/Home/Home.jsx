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
      <br></br>
      <img 
      src="https://www.survivalkit.com/blog/wp-content/uploads/2013/07/10.-Turf-houses-in-Iceland-Matador-SEO.jpg" 
      alt="Iceland Home"
      style={{width:'400px'}}
      />    </>
  )
}

export default Home;
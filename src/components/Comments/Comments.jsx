import {useState, useEffect} from 'react';
import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();//use as a variable to .push
  const [comments, setComments] = useState('');

  const handleComments = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_COMMENTS',
      payload: comments,
    });
    history.push('/Review') //console.log(feeling,"feeling")
  };




  return (
    <>
    <h1>Any comments you wish to leave?</h1>

    <form onSubmit={handleComments}>

      <input
      type='text'
      value={comments}
      onChange={(evt) => setComments(event.target.value)}
      />
      <button>Next</button>
      </form>
    </>
    )
}

export default Comments;


{/* <input
    onChange={(event) => handleChange(event)}
    placeholder='GitHub username'
    value={editStudent.github_name}
  /> */}
import {useState, useEffect} from 'react';
import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [comments, setComments] = useState('');

  const handleComments = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_COMMENTS',
      payload: comments,
    });
    history.push('/Review') 
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

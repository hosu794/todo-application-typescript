import React, { useEffect } from 'react';

import Home from './components/Home'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from './actions';



const App = () => {

  const dispatch = useDispatch();
  

  useEffect(() => {
    console.log("Fetch")
    
    dispatch(todoActions.getAllTodos())
  }, [])

  return (
   <React.Fragment>
     <Home />
   </React.Fragment>
  
  )
}

export default App;

import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Navbar from './layout/Navbar'
import Form from './Todo/TodoForm'
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '../reducers'
import { Todo } from '../types/todos';
import { todoActions } from '../actions';
import TodoItem from './Todo/TodoItem';
import Footer from './layout/Footer';
import Header from './layout/Header';




const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Album() {

  const todos = useSelector<RootState, any>(state => state.todos.todos);

  const dispatch = useDispatch();

  const deleteTodo = (id: number) => {
        dispatch(todoActions.deleteTodo(id))
  }

  const classes = useStyles();

  useEffect(() => {console.log("Todos array changed. ")}, [todos])

  return (
    <React.Fragment>
        <Navbar />
      <main>
       
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Header />
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Form />
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {todos ? todos.map((todo: Todo) => (
              <TodoItem todo={todo} />
            )) : "...Loading"}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}
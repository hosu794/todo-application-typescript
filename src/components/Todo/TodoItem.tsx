
import { Grid, Card, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux';
import { todoActions } from '../../actions';
import { Todo } from '../../types/todos'



const useStyles = makeStyles((theme) => ({
    cardContent: {
      flexGrow: 1,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }
  }));


  type TodoItemType =  {
      todo: Todo
  }



 const TodoItem = (props: TodoItemType) => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const deleteTodo = (id: number) => {
          dispatch(todoActions.deleteTodo(id))
    }

    return (
        <Grid item key={props.todo.id} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.todo.title}
            </Typography>
            <Typography>
              This is a media card. You can use this section to describe the content.
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => deleteTodo(props.todo.id)} size="small" variant="contained" color="secondary">
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    )
}
export default TodoItem
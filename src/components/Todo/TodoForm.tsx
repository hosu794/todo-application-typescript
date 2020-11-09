import React from 'react'
import * as yup from 'yup';
import uuid from 'uuid'
import { useField, Form, FormikProps, Formik, FieldConfig, FieldHookConfig } from 'formik';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../actions';
import {getRandomInt} from '../../utils/data'


interface Values {
    title: string
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);
 
const titleSchema = yup.object().shape({
    title: yup.string().required("title is required")
  });



  const MyTextField = ({ label, ...props }: { [x: string]: any; name: string, label?: string }) => {
    const [field, meta, helpers] = useField(props);
    return (
      <>
        <label>
          {label}
          <TextField {...field} {...props} />
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
 
  

const SimpleForm: React.FC<{}> = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    return (
        <div>
    
     <Formik 
       initialValues={{
        title: ""
       }}
       onSubmit={(values, actions) => {
          console.log(values.title)

          const newTodo = {
            userId: getRandomInt(400, 20000),
            id: getRandomInt(400, 20000),
            title: values.title,
            completed: false
          }

          dispatch(todoActions.createTodo(newTodo))

       }}
     >
       {(props: FormikProps<Values>) => (
         <Form className={classes.root}>
           <MyTextField placeholder="Create new todo..." name="title" type="text" />
           <Button  type="submit" size="small" variant="outlined" color="primary">
                      Create a todoList
          </Button>
         </Form>
       )}
     </Formik>
   </div>
    )
}

export default SimpleForm;
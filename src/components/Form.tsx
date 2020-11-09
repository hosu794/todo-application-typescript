import React from 'react'
import * as yup from 'yup';

import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
  } from 'formik';

interface MyFormValues {
    content: string
}

 
const contentSchema = yup.object().shape({
    content: yup.string().required("Content is required")
  });

const SimpleForm: React.FC<{}> = () => {
    const initialValues: MyFormValues = {content: ""}

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <h1>My Example</h1>
            <Formik
            initialValues={initialValues}
            validationSchema={contentSchema}
            onSubmit={(values, actions) => {
                console.log({values, actions})
                alert(JSON.stringify(values, null, 2))
                actions.setSubmitting(false)
            }}
            >
                 {({ errors, touched }) => (
                 <Form>
                <label htmlFor="content">Content</label>
                <Field id="content" name="content" placeholder="Content" />
                {errors.content && touched.content ? (
                 <div>{errors.content}</div>
           ) : null}
           <br/>
                <button type="submit">Submit</button>
                </Form>  
                )}
            </Formik>
        </div>
    )
}

export default SimpleForm;
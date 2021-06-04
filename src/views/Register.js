import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
function Regster(props) {
  const [data, setdata] = useState({
    Name: '',
    Email: '',
  });
  const apiUrl = 'http://localhost:5000/api/accounts';
  const Registration = (e) => {
    e.preventDefault();
    debugger;
    const data1 = {
      Name: data.Name,
      Email: data.Email,
    };
    axios.post(apiUrl, data1).then((result) => {
      debugger;
      console.log(result.data);
      if (result.data.Status == 'Invalid') alert('Invalid User');
      else props.history.push('/Profile');
    });
  };
  const onChange = (e) => {
    e.persist();
    /*  debugger; */
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div class="container">
      <Formik
        initialValues={{ email: '', name: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            Name
            <Field className="input" type="name" name="name" />
            <ErrorMessage name="name" component="div" />
            Email
            <Field className="input" type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <div className="button">
              <button
                className="loginBtn"
                type="submit"
                disabled={isSubmitting}
              >
                Logga in
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Regster;

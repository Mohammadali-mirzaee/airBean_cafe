import './Register.scss';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSelector, useDispatch, connect } from 'react-redux';
import { setUser } from '../redux/cafeAction';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const dispatch = useDispatch();

  const user = useSelector((state) => {
    console.log(state.user);
    return state.user;
  });

  const handelSubmit = (event) => {
    /* console.log(`your sate value: name: ${name}
                                  email:${email}`); */
    fetch('http://localhost:5000/api/accounts', {
      body: JSON.stringify({ email: email }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      type: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUser(data));
        console.log(data);
        alert('your are user now');
      });
  };
  return (
    <div className="register">
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
          <Form onSubmit={handelSubmit} className="formSign">
            Name
            <Field
              className="inputSign"
              type="name"
              value={name}
              name="name"
              onChange={handleNameChange}
            />
            <ErrorMessage name="name" component="div" />
            Email
            <Field
              className="inputSign"
              type="email"
              value={email}
              name="email"
              onChange={handleEmailChange}
            />
            <ErrorMessage name="email" component="div" />
            <div className="button">
              <button
                className="loginBtn"
                type="submit"
                disabled={isSubmitting}
              >
                SignUp
              </button>
            </div>
            <p>
              Already registered <a href="/login">logga in?</a>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;

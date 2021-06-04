import './Login.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <div>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            r="15"
            transform="matrix(-1 0 0 1 15 15)"
            fill="black"
            fill-opacity="0.1"
          />
          <path
            d="M6.12436 21.2012C7.76225 16.7738 9.42461 12.3556 11.0851 7.93553C11.3261 7.29809 11.7835 6.98759 12.5215 7.00038C14.182 7.0296 15.8444 7.02412 17.5048 7.00221C18.2391 6.99307 18.6702 7.31636 18.913 7.96658C20.5585 12.3574 22.2189 16.7409 23.8549 21.1354C24.2804 22.2769 23.7533 22.971 22.4919 22.9856C21.0178 23.0039 19.5456 22.9893 18.0715 22.9893C17.6291 22.9893 17.1754 23.0094 16.9401 22.5308C16.7198 22.0888 17.0172 21.782 17.245 21.4587C18.111 20.2331 18.6344 18.8888 18.7719 17.4021C18.8321 16.7391 18.5384 16.4268 17.8701 16.4249C16.9306 16.4213 15.9893 16.4249 15.0499 16.4249C15.0499 16.4231 15.0499 16.4213 15.0499 16.4213C14.1406 16.4213 13.2313 16.4085 12.3239 16.4249C11.3468 16.4414 11.102 16.7227 11.2451 17.6761C11.456 19.0806 11.9869 20.3646 12.8115 21.5409C13.4026 22.3865 13.1202 22.9655 12.0961 22.9801C10.5297 23.0057 8.96148 23.0094 7.39514 22.9747C6.2618 22.9491 5.74219 22.2331 6.12436 21.2012ZM13.9147 12.2442C14.3627 12.7629 14.7204 13.2926 14.8805 13.972C15.0292 14.6058 15.4434 14.6204 15.9046 14.193C16.7066 13.446 16.8007 12.0652 16.059 11.1136C15.6429 10.5803 15.2551 10.0743 15.1158 9.37844C15.0028 8.82137 14.5567 8.7684 14.1406 9.17753C13.6831 9.62318 13.4308 10.1656 13.4403 10.8597C13.4007 11.3474 13.5664 11.8442 13.9147 12.2442Z"
            fill="black"
            fill-opacity="0.6"
          />
        </svg>

        <h2>Välkomen till AirBean-familjen!</h2>
        <p>
          Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
        </p>
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
              <Link to="/register">register</Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default Login;
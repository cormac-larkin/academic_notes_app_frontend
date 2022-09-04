import classes from './LoginPage.module.css';
import Card from '../layout/Card';
import { Link } from 'react-router-dom';

const LoginPage = (props) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const options = {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify({
                email: data.get('email'),
                password: data.get('password'),
            })
        };

        const response = await fetch('http://localhost:4000/users/login', options);
        console.log(response);


    };

    return (
        <div className={classes.wrapper}>
            <Card>
                <h1 className={classes.formTitle}>Log In</h1>
                <hr />
                <br />
                <form className={classes.form} onSubmit={handleSubmit}>
                    <label className={classes.inputLabel} htmlFor="email-address">Email Address</label>
                    <input className={classes.input} type='text' name="email" id="email-address" required />
                    <br />
                    <label className={classes.inputLabel} htmlFor="password">Password</label>
                    <input className={classes.input} type='password' name="password" id="password" minLength='8' required />
                    <br />
                    <br />
                    <br />
                    <input className={classes.submitBtn} type='submit' value="LOGIN" />
                </form>
                <br />
                <Link className={classes.link} to="/register">Don't have an account? Click here to sign up!</Link>
            </Card>
        </div>
    );
};

export default LoginPage;
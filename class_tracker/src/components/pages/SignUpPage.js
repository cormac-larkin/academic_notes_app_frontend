import classes from "./SignUpPage.module.css";
import Card from "../UI/Card";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const SignUpPage = (props) => {

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        // Ensure both password fields have the same value before sending to backend
        if (data.get('password') !== data.get('confirm-password')) {
            alert("Looks like you mistyped your password, please double check");
            return;
        }

        // Construct the body of the POST request
        const options = {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
            credentials: "include",
            body: JSON.stringify({
                firstName: data.get('firstName'),
                lastName: data.get('lastName'),
                university: data.get('university'),
                email: data.get('email'),
                password: data.get('password'),
            })
        };

        const response = await fetch('http://localhost:4000/auth/register', options);
        console.log(response);

        if (response.status === 200) {
            navigate('/home');
        }
    };

    return (
        <div className={classes.wrapper}>
            <Card>
                <h1 className={classes.formTitle}>Create an Account</h1>
                <hr />
                <br />
                <form className={classes.form} onSubmit={handleSubmit}>
                    <label className={classes.inputLabel} htmlFor="first-name">First Name</label>
                    <input className={classes.input} type='text' name="firstName" id="first-name" required />
                    <br />
                    <label className={classes.inputLabel} htmlFor="last-name">Last Name</label>
                    <input className={classes.input} type='text' name="lastName" id="last-name" required />
                    <br />
                    <label className={classes.inputLabel} htmlFor="university">University</label>
                    <input className={classes.input} type='text' name="university" id="university" required />
                    <br />
                    <label className={classes.inputLabel} htmlFor="email-address">Email Address</label>
                    <input className={classes.input} type='email' pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" name="email" id="email-address" required />
                    <br />
                    <label className={classes.inputLabel} htmlFor="password">Password</label>
                    <input className={classes.input} type='password' name="password" id="password" minLength='8' required />
                    <br />
                    <label className={classes.inputLabel} htmlFor="confirm-password">Confirm Password</label>
                    <input className={classes.input} type='password' name="confirm-password" id="confirm-password" minLength='8' required />
                    <br />
                    <br />
                    <br />
                    <input className={classes.submitBtn} type='submit' value="REGISTER" />
                </form>
                <br />
                <Link className={classes.link} to='/login'>Already have an account? Click here to log in!</Link>
            </Card>
        </div>
    );
};

export default SignUpPage;
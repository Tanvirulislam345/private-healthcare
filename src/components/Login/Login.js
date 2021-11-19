import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { handleEmail, handlePassword, handleOnSubmit, signInUsingEmailAndPassword, signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const url = location.state?.from || '/home';
    const signInEmail = () => {
        signInUsingEmailAndPassword()
            .then(result => {
                console.log(result.user);
                history.push(url);
            })
    }
    const signInGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(url);
            })
    }

    return (
        <div className="signUpCover">
            <Container className="signUpContainer">
                <div>
                    <h1>Please Login</h1>

                    <form className="mt-4" onSubmit={handleOnSubmit}>
                        <input
                            className="inputField"
                            type="email"
                            name=""
                            id="userEmail"
                            placeholder="Email"
                            onBlur={handleEmail}
                        /><br /><br />
                        <input
                            className="inputField"
                            type="password"
                            name=""
                            id="userPassword"
                            placeholder="password"
                            onBlur={handlePassword}
                        /><br /><br />

                        <Button onClick={signInEmail} className="inputField btn-regular" >
                            Login
                        </Button>

                    </form>
                    <p className="txt mt-2">
                        <small>are you New user?</small>
                        <Link to='/signUp' className="regTolog">SignUp</Link>
                    </p>
                    <p className="smallText txt mt-3">Or Register with</p>
                    <div className="icons pb-5">
                        <img src="https://img.icons8.com/office/30/000000/google-logo.png"
                            alt="google"
                            className="icon"
                            onClick={signInGoogle}
                        />

                        <img src="https://img.icons8.com/color/35/000000/facebook-new.png" alt="facebook" className="icon mx-3" />

                        <img src="https://img.icons8.com/ios-filled/30/000000/github.png" alt="gitHub"
                            className="icon"
                        // onClick={signInUsingGithub}
                        />

                        <img src="https://img.icons8.com/color/35/000000/twitter-squared.png" className="icon ms-3" alt="twiter" />
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default Login;
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SignUp.css';

const SignUp = () => {
    const { handleUserName, handleEmail, handlePassword, handleOnSubmit, handleSubmitForm, signInUsingGoogle } = useAuth();
    return (
        <div className="signUpCover">
            <Container className="signUpContainer">
                <div>
                    <h1>Sign Up</h1>
                    <h2>Create an account</h2>
                    <small className="smallText">signUp a new account in one mimute</small>
                    <form className="mt-4" onSubmit={handleOnSubmit}>
                        <input
                            className="inputField"
                            type="text" name=""
                            id="userName"
                            placeholder="user name"
                            required
                            onBlur={handleUserName}
                        /><br /><br />
                        <input
                            className="inputField"
                            type="email"
                            name=""
                            id="userEmail"
                            placeholder="Email"
                            required
                            onBlur={handleEmail}
                        /><br /><br />
                        <input
                            className="inputField"
                            type="password"
                            name=""
                            id="userPassword"
                            placeholder="password"
                            required
                            onBlur={handlePassword}
                        /><br /><br />

                        <Button onClick={handleSubmitForm} className="inputField btn-regular" >
                            Register
                        </Button>
                    </form>
                    <p className="txt mt-2">
                        <small>are you already registered?</small>
                        <Link to='/logIn' className="regTolog">Login</Link>
                    </p>
                    <p className="smallText txt mt-3">Or Register with</p>
                    <div className="icons pb-5">
                        <img src="https://img.icons8.com/office/30/000000/google-logo.png"
                            alt="google"
                            className="icon"
                            onClick={signInUsingGoogle}
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

export default SignUp;
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {FirebaseContext} from "../Context/firebase"
import * as ROUTES from "../Constants/Routes"
import Form from "../Components/Form";
export default function FormContainer()
{
    const history=useHistory();
    const {firebase} = useContext(FirebaseContext);

    const [emailAddress,setemailAddress]=useState("");
    const [password,setpassword]=useState("");
    const [error,seterror]=useState();

    const isInvalid=password===" " || emailAddress===" ";

    const handleSignin = (event)=>{
        event.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {history.push(ROUTES.BROWSE)})
            .catch((error) => {
                setemailAddress('');
                setpassword('');
                return seterror(error.message);
            })
    };
    const googleAuth =()=>{
        var provider=new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
              /** @type {firebase.auth.OAuthCredential} */
              var credential = result.credential;
          
              // This gives you a Google Access Token. You can use it to access the Google API.
              var token = credential.accessToken;
              // The signed-in user info.
              var user = result.user;
              // ...
            })
            .then(()=>{history.push(ROUTES.BROWSE)})
            .catch((error) => {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            })
    }
    return (
        <>
            <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setemailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setpassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <button onClick={()=>googleAuth()}>Authenticate with Google</button>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
        </>
        )
}
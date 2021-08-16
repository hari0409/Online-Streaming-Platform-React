import React,{useState,useContext} from "react";
import Form from "../Components/Form";
import { useHistory } from "react-router";
import * as ROUTE from "../Constants/Routes"
import { FirebaseContext } from "../Context/firebase";
export default function SignUpFormContainer()
{
    const history=useHistory();
    const {firebase}= useContext(FirebaseContext)
    const [firstName,setfirstName]=useState("");
    const [emailAddress,setemailAddress]=useState("");
    const [password,setpassword]=useState("");
    const [phno,setphno]=useState("");
    const [error,seterror]=useState();
    const isInvalid=firstName===" "||password===" " || emailAddress===" ";
    const handleSignUp=((event)=>{
        event.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress,password)
            .then((result)=>result.user.updateProfile({
                displayName:firstName,
                PhoneNo:phno,
                photoURL:Math.floor(Math.random()*5+1)
            }))
            .then(()=>{
                history.push(ROUTE.BROWSE)
            })
            .catch((error)=>{
                setfirstName("");
                setemailAddress("")
                setpassword("")
                seterror(error.message)
            })
    })
    return(
        <>
        <Form>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
            placeholder="First Name"
            value={firstName}
            onChange={({target})=>setfirstName(target.value)}/>
            <Form.Input
            placeholder="Phone Number"
            value={phno}
            onChange={({target})=>setphno(target.value)}/>
            <Form.Input
                placeholder="Email Address"
                value={emailAddress}
                onChange={({target})=>setemailAddress(target.value)}/>
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setpassword(target.value)}
            />
            <Form.Submit type="submit" disable={!isInvalid}>Sign Up</Form.Submit>
            <Form.Text>
                Already a User? <Form.Link to={ROUTE.SIGN_IN}>Sign In Here</Form.Link>
            </Form.Text>
            <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </Form.TextSmall>
            </Form.Base>
        </Form>
        </>
    )
}
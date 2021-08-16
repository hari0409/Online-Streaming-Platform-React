import React from 'react';
import Header from "../Components/Header"
import * as ROUTES from "../Constants/Routes"
import SignUpFormContainer from './Signupform';
export default function SignUpHeaderContainer()
{
    return (
        <>
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="Knight" src="images/misc/logo.png"/>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            <SignUpFormContainer></SignUpFormContainer>
        </Header>   
        </>
        )
}
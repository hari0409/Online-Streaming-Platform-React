import React from 'react';
import Header from "../Components/Header"
import * as ROUTES from "../Constants/Routes"
import FormContainer from './Form';
export default function SignInHeaderContainer()
{
    return (
        <>
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="Knight" src="images/misc/logo.png"/>
            </Header.Frame>
            <FormContainer></FormContainer>
        </Header>   
        </>
        )
}
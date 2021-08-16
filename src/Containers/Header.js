import React from "react"
import Header from "../Components/Header"
import * as ROUTES from "../Constants/Routes"
import OptForm from "../Components/OptForm"
import Features from "../Components/Features"
export default function HeaderConatiner()
{
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="Knight" src="images/misc/logo.png"/>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            <Features>
                <Features.Title>Unlimited films,TV Programmes and more</Features.Title>
                <Features.subTitle>Watch it from Anywhere and Cancel it Anytime</Features.subTitle>
            </Features>
            <OptForm>
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>Ready to watch? Enter your email to create your  membership.</OptForm.Text>
            </OptForm>
        </Header>
        )
}
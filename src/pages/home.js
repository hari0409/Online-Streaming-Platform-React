import React from "react"
import JumbotronContainer from "../Containers/Jumbotron"
import AccordianContainer from "../Containers/Accordian"
import FooterContainer from "../Containers/Footer"
import HeaderContainer from "../Containers/Header"
import OptForm from "../Components/OptForm"
import Features from "../Components/Features"
export default function Home()
{
    return (
        <>
        <HeaderContainer>
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
        </HeaderContainer>
        <JumbotronContainer/>
        <AccordianContainer/>
        <FooterContainer/>
        </>
    )
}
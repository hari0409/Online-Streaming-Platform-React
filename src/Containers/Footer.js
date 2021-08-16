import Footer from "../Components/Footer";
import React from 'react'

function FooterContainer() {
    return (
        <div>
            <Footer>
                <Footer.Title>
                    Question? Contact Us....
                </Footer.Title>
                <Footer.Break/>
                <Footer.Column>
                    <Footer.Row>
                        <Footer.Link href="#">FAQ</Footer.Link>
                        <Footer.Link href="#">Investor Realation</Footer.Link>
                        <Footer.Link href="#">Ways to Watch</Footer.Link>
                        <Footer.Link href="#">Corporate Information</Footer.Link>
                    </Footer.Row>
                    <Footer.Row>
                        <Footer.Link href="">Help Center</Footer.Link>
                        <Footer.Link href="">Jobs</Footer.Link>
                        <Footer.Link href="">Terms of Use</Footer.Link>
                        <Footer.Link href="">Contact Us</Footer.Link>
                    </Footer.Row> 
                    <Footer.Row>
                        <Footer.Link href="#">Knight Originals</Footer.Link>
                        <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
                        <Footer.Link href="#">Buy Gift Cards</Footer.Link>
                    </Footer.Row>
                </Footer.Column>
                <Footer.Break/>
                <Footer.Text>Knight India</Footer.Text>
            </Footer>
        </div>
    )
}

export default FooterContainer

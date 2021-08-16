import Accordian from "../Components/Accordian";
import React from "react"
import faqsData from "../fixtures/faqs.json"
import OptForm  from "../Components/OptForm";
function AccordianContainer()
{
    return (
            <Accordian>
                <Accordian.Title>Frequently Asked Question</Accordian.Title>
                    {faqsData.map((item)=>{
                        return (<Accordian.Item key={item.id}>
                                    <Accordian.Header>{item.header}</Accordian.Header>
                                    <Accordian.Body>{item.body}</Accordian.Body>
                                </Accordian.Item>)
                    })}
                <OptForm>
                    <OptForm.Input placeholder="Email Address"></OptForm.Input>
                    <OptForm.Button>Send</OptForm.Button>
                    <OptForm.Text>Have any more Question email us to know more about us...</OptForm.Text>
                </OptForm>
            </Accordian> 
    )
}
export default AccordianContainer
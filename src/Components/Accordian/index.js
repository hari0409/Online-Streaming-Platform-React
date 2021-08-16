import React,{createContext, useContext, useState} from 'react'
import { Container,Title,Frame,Item,Inner,Header,Body } from '../Accordian/Styles/Accordian'
const ToggleContext=createContext()

function Accordian({children,...restProps}){
    return(
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordian.Title=function AccordianTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Accordian.Frame=function AccordianFrame({children,...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}

Accordian.Item=function AccordianItem({children,...restProps}){
    const [toggleShow, setToggleShow] = useState(false)
    return (
    <ToggleContext.Provider value={{toggleShow,setToggleShow}}>
        <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>)
}

Accordian.Header=function AccordianHeader({children,...restProps}){
    const {toggleShow,setToggleShow}=useContext(ToggleContext);
    return (<Header {...restProps} onClick={()=>setToggleShow((toggleShow)=>!toggleShow)}>
                {children}
                {toggleShow ?(<img src="images/icons/close-slim.png" alt="Close"></img>):(<img src="images/icons/add.png" alt="Open"></img>)}
            </Header>)
}
Accordian.Body=function AccordianBody({children,...restProps})
{
    const {toggleShow}=useContext(ToggleContext);
    return (
        <Body className={toggleShow ? 'open' : 'closed'} {...restProps}>
          <span>{children}</span>
        </Body>
      );
}
export default Accordian

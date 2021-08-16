import React,{useState,useContext,createContext} from "react";
import {Container,Title,SubTitle,Text,Group,Image,Entities,Feature,FeatureTitle,FeatureText,FeatureClose,Maturity,Content,Meta,Item} from "./Styles/Cards"

export const FeatureContext=createContext();

function Cards({children,...restProps}) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});
    return (
        <FeatureContext.Provider value={{showFeature,setShowFeature,itemFeature,setItemFeature}}>
            <Container {...restProps}>
                {children}
            </Container>
        </FeatureContext.Provider>
    );
}

export default Cards
Cards.Group=function CardsGroup({children,...restProps})
{
    return <Group {...restProps}>{children}</Group>
}
Cards.Title=function CardsTitle({children,...restProps})
{
    return <Title {...restProps}>{children}</Title>
}
Cards.SubTitle=function CardsSubTitle({children,...restProps})
{
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Cards.Text=function CardsText({children,...restProps})
{
    return <Text {...restProps}>{children}</Text>
}
Cards.Meta=function CardsMeta({children,...restProps})
{
    return <Meta {...restProps}>{children}</Meta>
}
Cards.Item=function CardsItem({item,children,...restProps})
{   
    const {setShowFeature,setItemFeature}=useContext(FeatureContext);
    return <Item  
        onClick={()=>{
            setItemFeature(item);
            setShowFeature(true);
        }}  {...restProps}>{children}</Item>
}
Cards.Image=function CardImage({...restProps})
{
    return <Image {...restProps}/>
}
Cards.Entities=function CardsEntities({children,...restProps})
{
    return <Entities {...restProps}>{children}</Entities>
}
Cards.Feature=function CardFeature({children,category,...restProps})
{
  const {showFeature,itemFeature,setShowFeature}=useContext(FeatureContext);
    return showFeature?(
    <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`} {...restProps}>
        <Content>
            <FeatureTitle>{itemFeature.title}</FeatureTitle>
            <FeatureText>{itemFeature.description}</FeatureText>
            <FeatureClose onClick={()=>setShowFeature(false)}>
                <img src="/images/icons/close.png" alt="Close"/>
            </FeatureClose>
            <Group margin="30px 0" flexDirection="row" alignItems="center">
            <Maturity rating={itemFeature.maturity}>{itemFeature.maturity<12?"PG": itemFeature.maturity}</Maturity>
            <FeatureText font-weight="bold">
                {itemFeature.genre.charAt(0).toUpperCase()+itemFeature.genre.slice(1)}
            </FeatureText>
        </Group>
        {children}
        </Content>
    </Feature>):null;
};
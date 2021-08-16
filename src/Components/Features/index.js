import React from "react"
import { Container,Title} from "./Styles/Features"
import {Text} from "../OptForm/Styles/OptForm"
export default function Features({children,...restProps})
{
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Features.Title=function FeaturesTitle({children,...restProps})
{
    return <Title {...restProps}>{children}</Title>
};

Features.subTitle=function FeaturessubTitle({children,...restProps})
{
    return <Text >{children}</Text>
};

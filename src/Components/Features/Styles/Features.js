import styled from "styled-components/macro"

export const Container=styled.div`
    display:flex;
    flex-direction:column;
    border-bottom:8px solid solid #222;
    text-align:center;
    padding:25px 45px;
`;
export const Title=styled.h1`
    color:white;
    max-width:640px;
    font-size:55px;
    font-weight:620;
    margin:auto;
    @media(max-width:1000px)
    {
        font-size:35px;
    }

`;


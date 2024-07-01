import styled from "styled-components";

export const Title = styled.h2`
    font-family: ${({theme})=> theme.fonts.family.secondary};
    font-size: ${({theme})=> theme.fonts.size.header.extraSmall};

    span{
        padding-right: 10px;
        color: #4d4f56;
    }
`
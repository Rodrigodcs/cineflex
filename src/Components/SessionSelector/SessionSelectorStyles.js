import styled from "styled-components";

export const Orientation = styled.h2`
    margin:0 auto;
    margin-top:120px;
    color:#293845;
    text-align:center;
    font-size:24px;
    line-height:28px;
    letter-spacing: 0.04em;
`;

export const Wrapper = styled.section`
    margin:0 auto;
    margin-top:50px;
    max-width:400px;
    display:flex;
    flex-direction:column;
    gap:20px;
    justify-content:left;
`;

export const SessionWrapper = styled.section`
    display:flex;
    flex-direction:column;

    p{
        color:#293845;
        font-size:20px;
        font-weight:400;
        line-height: 23px;
        letter-spacing: 0.02em;
    }
    div{
        margin-top:15px;
        display:flex;
        gap:8px;
    }
    button{
        height: 43px;
        width: 82px;
        background-color:#E8833A;
        border-radius: 3px;
        color:white;
        border:none;
        font-size:18px;
        font-weight:400;
        line-height: 21px;
        letter-spacing: 0.02em;
    }
`;

export const Loading = styled.section`
    margin:0 auto;
    margin-top:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
    img{
        width:100px;
        height:100px;
        margin-bottom:-100px;
    }
`;



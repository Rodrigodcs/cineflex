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
    display:flex;
    flex-wrap:wrap;
    max-width:400px;
    gap:10px 30px;
    align-items:center;
    justify-content:center;
`;

export const MovieCard = styled.section`
    width:145px;
    height:209px;
    border-radius:5px;
    padding:8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    img{
        max-width:100%;
        max-height:100%;
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

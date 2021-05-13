import styled from "styled-components";

export const Orientation = styled.h2`
    margin:0 auto;
    margin-top:100px;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
    font-weight: bold;
`;

export const Wrapper = styled.section`
    margin:0 auto;
    margin-top:50px;
    display:flex;
    flex-direction:column;
    max-width:400px;
    align-items:center;
`;

export const Info = styled.div`
    min-height:50px;
    width:323px;
    margin-bottom:30px;
    div{

    }
    h3{
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
        margin-bottom:5px;
    }
    p{
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;
        color: #293845;
    }
`;

export const OrangeButton= styled.button`
    margin-top:10px;
    margin-bottom:120px;
    width: 225px;
    height: 42px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    background: #E8833A;
    border-radius: 3px;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
`;

export const Loading = styled.section`
    margin:0 auto;
    margin-top:200px;
    display:flex;
    flex-direction:column;
    align-items:center;
    img{
        width:100px;
        height:100px;
        margin-bottom:-100px;
    }
`;

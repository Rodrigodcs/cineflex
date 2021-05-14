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
    margin-top:20px;
    display:flex;
    flex-direction:column;
    max-width:400px;
    align-items:center;
`;

export const SeatsWrapper = styled.section`
    max-width:323px;
    display:flex;
    flex-wrap:wrap;
    gap:18px 7px;
`;
 
export const Seat = styled.button`
    height: 26px;
    width: 26px;
    border-radius: 100%;
    color:black;
    line-height: 12px;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    letter-spacing: 0.04em;
    border:${props => props.unavaliable?"1px solid #F7C52B;":(props.selected? "1px solid #45BDB0":"1px solid #808F9D")};
    background-color: ${props => props.unavaliable?"#FBE192":(props.selected? "#8DD7CF":"#C3CFD9")};
`;

export const Legend = styled.section`
    margin-top:20px;
    display:flex;
    justify-content:space-around;
    width:100%;
    max-width:323px;
    div{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:5px;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
`;

export const Info = styled.section`
    margin-top:20px;
    width:323px;
    h2{
        margin-top:15px;
        font-size: 20px;
        line-height: 21px;
        color: #8DD7CF;
    }
    p{
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }
    input{
        width:100%;
        height: 51px;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 3px;
        margin-bottom:10px;
        margin-top:5px;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
        padding-left:15px;
    }
`;

export const OrangeButton= styled.button`
    margin-top:10px;
    margin-bottom:150px;
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

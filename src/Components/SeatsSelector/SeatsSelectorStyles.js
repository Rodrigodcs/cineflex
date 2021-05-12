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

export const Reserv = styled.button`
    margin-top:50px;
    height: 26px;
    width: 100px;
    color:black;
    line-height: 12px;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    letter-spacing: 0.04em;

`;
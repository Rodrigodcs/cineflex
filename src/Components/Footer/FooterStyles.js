import styled from "styled-components";

export const Wrapper = styled.section`
  position:fixed;
  bottom:0;
  left:0;
  z-index:10;
  margin: 0 auto;
  width:100%;
  background: #C3CFD9;
  display:flex;
  align-items:center;
  height:117px;
  padding:14px 10px ;
  border-top: 2px solid #9EADBA;
`;

export const Poster = styled.section`
  padding:8px;
  width:64px;
  height:89px;
  background-color:White;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  img{
    max-width:100%;
    max-height:100%;
  }
`;

export const Info = styled.section`
  
`;

export const Title= styled.h1`
  font-size: 26px;
  line-height: 30px;
  color: #293845;
  margin-left:10px;
`;

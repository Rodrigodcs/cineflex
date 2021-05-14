import styled from "styled-components";

export const Title= styled.h1`
  color:#E8833A;
  text-align:center;
  font-size:34px;
  line-height:40px;
`;

export const Wrapper = styled.section`
  position:fixed;
  top:0;
  left:0;
  z-index:10;
  margin: 0 auto;
  width:100%;
  background: #C3CFD9;
  display:flex;
  align-items:center;
  justify-content:center;
  height:67px;
`;

export const BackArrow= styled.div`
  position:fixed;
  top:21px;
  left: 25px;
  padding-top:3px;
  display:${props => props.show};
  align-items:center;
  justify-content:center;
  background-color:#E8833A;
  border-radius:5px;
  box-shadow:0 0 5px grey;
  width:40px;
  height:25px;
`;
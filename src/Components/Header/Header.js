import {Title, BackArrow, Wrapper} from "./HeaderStyles"
import React from 'react'
import { ArrowBack } from 'react-ionicons'
import { createBrowserHistory } from "history"


export default function Header(props){
    let history = createBrowserHistory()

    function previousPage(){
        history.goBack()
    }

    return (
        <Wrapper>
            <BackArrow show={props.show} onClick={()=>previousPage()}>
                <ArrowBack color={'#C3CFD9'} height="25px" width="25px"/>
            </BackArrow>
            <Title>CINEFLEX</Title>
        </Wrapper>
    );
} 
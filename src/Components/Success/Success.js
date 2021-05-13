import {Orientation, Wrapper, Info, OrangeButton, Loading} from "./SuccessStyles"
import {Link} from "react-router-dom"
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Success(props){
    const [successScreen, setSuccessScreen] = useState(false);

    console.log(props.request)
    useEffect(()=>{
        const reservRequest={
            ids:props.request.seatsSelected.map(s=> s.id),
            name:props.request.userInfo.name,
            cpf:props.request.userInfo.CPF
        }
        const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`,reservRequest)
        request.then((response)=>{
            console.log(response)
            setSuccessScreen(true)
        })
    },[])

    if(!successScreen){
        return (
            <>
                <Loading>
                    <img src="https://thumbs.gfycat.com/CorruptOldfashionedGuineapig-max-1mb.gif" alt=""/>
                    <Orientation>ENVIANDO</Orientation>
                </Loading>
            </>
        )
    }
    return (
        <>
        <Orientation>Pedido feito<br/>com sucesso!</Orientation>
        <Wrapper>
            <Info>
                    <h3>Filme e sessão</h3>
                    <p>
                        {props.request.movieInfo.movie.title}<br/>
                        {props.request.movieInfo.day.date}-{props.request.movieInfo.session}
                    </p>
            </Info>
            <Info>
                    <h3>Ingressos</h3>
                    {props.request.seatsSelected.map(s=><p>Assento {s.name}</p>)}
            </Info>
            <Info>
                    <h3>Comprador</h3>
                    <p>
                        Nome: {props.request.userInfo.name}<br/>
                        CPF: {props.request.userInfo.CPF}
                    </p>
            </Info>

            <Link to={`/`}><OrangeButton>Voltar pra Home</OrangeButton></Link>
        </Wrapper>

        
        </>
    );
} 
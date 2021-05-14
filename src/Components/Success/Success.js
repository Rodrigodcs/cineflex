import {Orientation, Wrapper, Info, OrangeButton, Loading} from "./SuccessStyles"
import {Link, useHistory} from "react-router-dom"
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function Success(props){
    const [successScreen, setSuccessScreen] = useState(false);
    let history = useHistory();

    useEffect(()=>{
        const request = axios.post(`
            https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many
        `,props.request.req)
        request.then((response)=>{
            setSuccessScreen(true)
        })
        request.catch((response)=>{
            alert("Não foi possivel realizar a reserva!")
            history.goBack();
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
                    {props.request.seats.map((s,i)=><p key={i}>Assento {s}</p>)}
            </Info>
            <Info>
                    <h3>Comprador(es)</h3>
                    {props.request.req.compradores.map((s,i)=><p key={i}>
                        Nome: {s.nome}<br/>
                        CPF: {s.cpf}
                    </p>)}
            </Info>
            <Link to={`/`}><OrangeButton>Voltar pra Home</OrangeButton></Link>
        </Wrapper>
        </>
    );
} 
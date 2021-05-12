import {Orientation, Wrapper, SessionWrapper} from "./SessionSelectorStyles"
import {useParams, Link} from "react-router-dom"
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function SessionSelector(){
    const {movieId} = useParams();
    const [sessions,setSessions]=useState([])

    useEffect(()=>{
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${movieId}/showtimes`)
        request.then((response)=>{
            console.log(response)
            setSessions(response.data.days)
        })
    },[])

    if(sessions.length===0){
        return <Orientation>Carregando</Orientation>
    }

    return (
        <>
            <Orientation>Selecione o horário {movieId}</Orientation>
            <Wrapper> 
                {sessions.map(s=>
                    <SessionWrapper>
                        <p>{s.weekday} - {s.date}</p>
                        <div>
                            <Link to={`/sessao/${s.showtimes[0].id}`}><button>{s.showtimes[0].name}</button></Link>
                            <Link to={`/sessao/${s.showtimes[1].id}`}><button>{s.showtimes[1].name}</button></Link>
                        </div>
                    </SessionWrapper>
                )}
            </Wrapper>
        </>
    );
} 
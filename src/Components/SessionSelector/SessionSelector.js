import {Orientation, Wrapper, SessionWrapper, Loading} from "./SessionSelectorStyles"
import {useParams, Link} from "react-router-dom"
import axios from 'axios';
import { useState, useEffect } from 'react';
import Footer from "../Footer/Footer"

export default function SessionSelector(){
    const {movieId} = useParams();
    const [sessions,setSessions]=useState([])
    const [movieInfo,setMovieInfo]=useState({})

    useEffect(()=>{
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${movieId}/showtimes`)
        request.then((response)=>{
            setMovieInfo({movie:{title:response.data.title,posterURL:response.data.posterURL}})
            console.log(response)
            setSessions(response.data.days)
        })
    },[])

    if(sessions.length===0){
        return (
            <>
                <Orientation>Selecione o horário</Orientation>
                <Loading>
                    <img src="https://static.wixstatic.com/media/31a3a0_9bc23fcac19142cfa2d7bcecc1986f23~mv2_d_1331_1332_s_2.gif" alt=""/>
                </Loading>
            </>
        )
    }
    console.log(movieInfo)
    return (
        <>
            <Orientation>Selecione o horário</Orientation>
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
            <Footer info={movieInfo}/>
        </>
    );
} 
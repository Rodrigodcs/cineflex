import {Orientation, Wrapper, SeatsWrapper, Legend, Seat, Reserv} from "./SeatsSelectorStyles"
import {useParams, Link} from "react-router-dom"
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function SeatsSelector(props){
    const {sessionId} = useParams();
    const [seats,setSeats]=useState([])

    useEffect(()=>{
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionId}/seats`)
        request.then((response)=>{
            const temp=response.data.seats
            temp.forEach(i => i.selected=false)
            setSeats(temp)
        })
    },[])

    function select(seatId){
        seats.forEach(seat=> {if(seat.id===seatId){seat.selected=true}})
        setSeats([...seats])
    }
    function deselect(seatId){
        seats.forEach(seat=> {if(seat.id===seatId){seat.selected=false}})
        setSeats([...seats])
    }
    function createRequest(){
        const temp=seats.filter(s=> s.selected)
        const ids=temp.map(s=> s.id)
        props.change("Rodrigo","12345678900",ids)
    }

    return (
        <>  
        <Orientation>Selecione o(s) assento(s)</Orientation>
        <Wrapper>
            <SeatsWrapper>
                {seats.map(s => 
                    s.isAvailable?
                        (s.selected?
                            <Seat selected onClick={()=>deselect(s.id)}>{s.name}</Seat>
                            :<Seat onClick={()=>select(s.id)}>{s.name}</Seat>)
                    :<Seat unavaliable>{s.name}</Seat>
                )}
            </SeatsWrapper>
            <Legend>
                <div><Seat selected></Seat><p>Selecionado</p></div>
                <div><Seat></Seat><p>Disponível</p></div>
                <div><Seat unavaliable></Seat><p>indisponível</p></div>
            </Legend>
            <Link to={`/sucesso`} onClick={()=>createRequest()}><Reserv>reservar</Reserv></Link>
            
        </Wrapper>

        </>
    );
} 
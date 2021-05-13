import {Orientation, Wrapper, SeatsWrapper, Legend, Seat, OrangeButton, Info, Loading} from "./SeatsSelectorStyles"
import {useParams, Link} from "react-router-dom"
import axios from 'axios';
import { useState, useEffect } from 'react';
import Footer from "../Footer/Footer"

export default function SeatsSelector(props){
    const {sessionId} = useParams();
    const [seats,setSeats]=useState([])
    const [movieInfo,setMovieInfo]=useState({})
    const [name,setName]=useState("")
    const [CPF,setCPF]=useState("")

    useEffect(()=>{
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionId}/seats`)
        request.then((response)=>{
            console.log(response)
            setMovieInfo({movie:response.data.movie,day:response.data.day,session:response.data.name})
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
        console.log(seats)
        const sSelected=seats.filter(s=> s.selected)
        const mInfo = movieInfo;
        const uInfo={name:name,CPF:CPF};
        props.change(uInfo,mInfo,sSelected)
    }
    function nameChange(event){
        setName(event.target.value)
    }
    function CPFChange(event){
        setCPF(event.target.value)
    }
    function alertUser(seatName){
        alert("O assento "+seatName+" está indisponivel")
    }

    console.log(movieInfo)
    if(seats.length===0){
        return (
            <>
                <Orientation>Selecione o(s) assento(s)</Orientation>
                <Loading>
                    <img src="https://static.wixstatic.com/media/31a3a0_9bc23fcac19142cfa2d7bcecc1986f23~mv2_d_1331_1332_s_2.gif" alt=""/>
                </Loading>
            </>
        )}
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
                    :<Seat unavaliable onClick={()=>alertUser(s.name)}>{s.name}</Seat>
                )}
            </SeatsWrapper>
            <Legend>
                <div><Seat selected></Seat><p>Selecionado</p></div>
                <div><Seat></Seat><p>Disponível</p></div>
                <div><Seat unavaliable></Seat><p>indisponível</p></div>
            </Legend>
            <Info>
                <p>Nome do comprador:</p>
                <input type="text" placeHolder="Digite seu nome..." onChange={nameChange} value={name}/>
                <p>CPF do comprador:</p>
                <input type="text" placeHolder="Digite seu CPF..." onChange={CPFChange} value={CPF}/>
            </Info>

            <Link to={`/sucesso`} onClick={()=>createRequest()}><OrangeButton>Reservar assento(s)</OrangeButton></Link>
            
        </Wrapper>
        <Footer info={movieInfo} page3={true}/>
        </>
    );
} 
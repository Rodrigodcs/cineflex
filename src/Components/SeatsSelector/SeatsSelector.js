import {Orientation, Wrapper, SeatsWrapper, Legend, Seat, OrangeButton, Info, Loading} from "./SeatsSelectorStyles"
import {useParams, useHistory} from "react-router-dom"
import axios from 'axios';
import {useState, useEffect} from 'react';
import Footer from "../Footer/Footer"

export default function SeatsSelector(props){
    const {sessionId} = useParams();
    const [seats,setSeats]=useState([])
    const [movieInfo,setMovieInfo]=useState({})
    let history = useHistory();

    useEffect(()=>{
        const request = axios.get(`
            https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionId}/seats
        `)
        request.then(({data})=>{
            setMovieInfo({
                movie:data.movie,
                day:data.day,
                session:data.name
            })
            const temp=data.seats
            temp.forEach(i => {
                i.selected=false; 
                i.customer=""; 
                i.customerCPF=""
            })
            request.catch(response =>{
                console.log(response)
                alert("Ocorreu um erro inesperado")
                history.goBack();
            }) 
            setSeats(temp)
        })
    },[history,sessionId])

    function select(seatId){
        seats.forEach(seat=> {
            if(seat.id===seatId){
                seat.selected=true;
                seat.customer="";
                seat.customerCPF="";
            }
        })
        setSeats([...seats])
    }

    function deselect(seatId,name){
        if(window.confirm("Desmarcar assento "+name)){
            seats.forEach(seat=> {if(seat.id===seatId){seat.selected=false}})
            setSeats([...seats])
        }
    }

    function alertUser(seatName){
        alert("O assento "+seatName+" está indisponivel")
    }

    function createRequest(){
        const sSelected=seats.filter(s=> s.selected)
        props.change({
            ids:sSelected.map(s=>s.id),
            compradores:sSelected.map(s=> ({
                idAssento:s.id , 
                nome:s.customer , 
                cpf:s.customer
            }))
        },sSelected.map(s=> s.name),movieInfo)
        history.push(`/sucesso`)
    }

    function nameChange(event,id){
        seats.forEach((s)=> {
            if(s.id===id){
                s.customer=event.target.value
            }});
        setSeats([...seats])
    }
    function cpfChange(event,id){
        seats.forEach((s)=> {
            if(s.id===id){
                s.customerCPF=event.target.value
            }});
        setSeats([...seats])
    }

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
                            <Seat key={s.id} selected onClick={()=>deselect(s.id,s.name)}>{s.name}</Seat>
                            :<Seat key={s.id} onClick={()=>select(s.id)}>{s.name}</Seat>)
                    :<Seat key={s.id} unavaliable onClick={()=>alertUser(s.name)}>{s.name}</Seat>
                )}
            </SeatsWrapper>
            <Legend>
                <div><Seat selected></Seat><p>Selecionado</p></div>
                <div><Seat></Seat><p>Disponível</p></div>
                <div><Seat unavaliable></Seat><p>indisponível</p></div>
            </Legend>
            <Info>
                {seats.filter(s=>s.selected).map(s=> 
                    <div key={s.id}>
                        <h2>Assento: {s.name}</h2>
                        <p>Nome do comprador:</p>
                        <input type="text" placeholder="Digite seu nome..." 
                            onChange={(e)=>nameChange(e,s.id)} value={s.customer}/>
                        <p>CPF do comprador:</p>
                        <input type="text" placeholder="Digite seu CPF..." 
                            onChange={(e)=>cpfChange(e,s.id)} value={s.customerCPF}/>
                    </div>
                )}
                
            </Info>

            <OrangeButton onClick={()=>createRequest()}>Reservar assento(s)</OrangeButton>
            
        </Wrapper>
        <Footer info={movieInfo} page3={true}/>
        </>
    );
} 
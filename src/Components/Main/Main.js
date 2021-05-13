import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import Header from "../Header/Header"
import MovieSelector from "../MovieSelector/MovieSelector"
import SessionSelector from "../SessionSelector/SessionSelector"
import SeatsSelector from "../SeatsSelector/SeatsSelector"
import Success from "../Success/Success"
import {GlobalStyle} from "./GlobalStyle"
import { useState } from 'react';



export default function Main(){
    const [request, setRequest] = useState({});
    function changeRequest(userInfo,movieInfo,seatsSelected){
        setRequest({
            userInfo:userInfo,
            movieInfo:movieInfo,
            seatsSelected:seatsSelected
        })
    }

    return (
        <>
            <GlobalStyle />
            <Header/>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <MovieSelector/>
                    </Route>
                    <Route path="/filme/:movieId" exact>
                        <SessionSelector/>
                    </Route>
                    <Route path="/sessao/:sessionId" exact>
                        <SeatsSelector change={changeRequest}/>
                    </Route>
                    <Route path="/sucesso" exact>
                        <Success request={request}/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
} 
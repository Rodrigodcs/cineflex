import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import Header from "../Header/Header"
import MovieSelector from "../MovieSelector/MovieSelector"
import SessionSelector from "../SessionSelector/SessionSelector"
import SeatsSelector from "../SeatsSelector/SeatsSelector"
import Success from "../Success/Success"
import {GlobalStyle} from "./GlobalStyle"
import { useState } from 'react';


export default function Main(){
    const [backArrow, setBackArrow] = useState("flex");
    const [request, setRequest] = useState({});
    function changeRequest(req,seats,movieInfo){
        setRequest({
            req:req,
            seats:seats,
            movieInfo:movieInfo
        })
    }

    function changeBackArrow(info){
        setBackArrow(info)
    }

    return (
        <>
            <GlobalStyle />
            <Header show={backArrow}/>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <MovieSelector changeBackArrow={changeBackArrow}/>
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
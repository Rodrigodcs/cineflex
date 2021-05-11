import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import Header from "../Header/Header"
import MovieSelector from "../MovieSelector/MovieSelector"
import SessionSelector from "../SessionSelector/SessionSelector"
import SeatsSelector from "../SeatsSelector/SeatsSelector"
import Success from "../Success/Success"
import {GlobalStyle} from "./GlobalStyle"




export default function Main(){

    return (
        <>
            <GlobalStyle />
            <Header/>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <MovieSelector/>
                    </Route>
                    <Route path="/session" exact>
                        <SessionSelector/>
                    </Route>
                    <Route path="/seats" exact>
                        <SeatsSelector/>
                    </Route>
                    <Route path="/success" exact>
                        <Success/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
} 
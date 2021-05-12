import {Orientation} from "./SuccessStyles"
import {Link} from "react-router-dom"
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Success(props){
    console.log(props.request)
    useEffect(()=>{
        const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`,props.request)
        request.then((response)=>{
            console.log(response)
        })
    },[])

    return (
        <Orientation>Success</Orientation>
    );
} 
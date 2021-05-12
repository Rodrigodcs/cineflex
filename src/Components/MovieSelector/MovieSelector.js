import {Wrapper, MovieCard, Orientation} from "./MovieSelectorStyles"
import {Link} from "react-router-dom"
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function MovieSelector(){
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");

		request.then(response => {
            console.log(response)
			setMovies(response.data);
		});
	}, []);

    if(movies.length===0){
        return <Orientation>Carregando</Orientation>
    }

    return (
        <>
            <Orientation>Selecione o filme</Orientation>
            <Wrapper> 
                {movies.map(m => 
                    <Link to={`/filme/${m.id}`}>
                        <MovieCard>
                            <img src={m.posterURL} alt=""/>
                        </MovieCard>
                    </Link>
                )}
            </Wrapper>
        </>
    );
} 
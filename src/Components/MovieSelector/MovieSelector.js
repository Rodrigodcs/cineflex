import {Wrapper, MovieCard, Orientation, Loading} from "./MovieSelectorStyles"
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
        return (
            <>
                <Orientation>Selecione o filme</Orientation>
                <Loading>
                    <img src="https://static.wixstatic.com/media/31a3a0_9bc23fcac19142cfa2d7bcecc1986f23~mv2_d_1331_1332_s_2.gif" alt=""/>
                    <Orientation>CARREGANDO FILMES</Orientation>
                </Loading>
            </>
        )
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
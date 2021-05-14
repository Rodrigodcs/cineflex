import {Wrapper, MovieCard, Orientation, Loading} from "./MovieSelectorStyles"
import {Link, useHistory} from "react-router-dom"
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function MovieSelector(props){
	const [movies, setMovies] = useState([]);
    let history = useHistory();

	useEffect(() => {
		const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
        props.changeBackArrow("none")
		request.then(response => {
			setMovies(response.data);
		});
        request.catch(response =>{
            alert("Ocorreu um erro inesperado")
            history.goBack();
        }) 
	}, [history,props]);

    if(movies.length===0){
        return (
            <>
                <Orientation>Selecione o filme</Orientation>
                <Loading>
                    <img src="https://static.wixstatic.com/media/31a3a0_9bc23fcac19142cfa2d7bcecc1986f23~mv2_d_1331_1332_s_2.gif" alt=""/>
                </Loading>
            </>
        )
    }

    return (
        <>
            <Orientation>Selecione o filme</Orientation>
            <Wrapper> 
                {movies.map(m => 
                    <Link key={m.id} to={`/filme/${m.id}`} onClick={()=>props.changeBackArrow("flex")}>
                        <MovieCard>
                            <img src={m.posterURL} alt={m.title}/>
                        </MovieCard>
                    </Link>
                )}
            </Wrapper>
        </>
    );
} 
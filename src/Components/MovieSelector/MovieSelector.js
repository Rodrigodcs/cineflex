import {Wrapper} from "./MovieSelectorStyles"
import {MovieCard} from "./MovieSelectorStyles"
import {Orientation} from "./MovieSelectorStyles"

export default function MovieSelector(){
    const arrayMovies=[
        {name:"enola holmes", image:"https://javiu.files.wordpress.com/2020/09/enola.jpg?w=479"},
        {name:"enola holmes", image:"https://javiu.files.wordpress.com/2020/09/enola.jpg?w=479"},
        {name:"enola holmes", image:"https://javiu.files.wordpress.com/2020/09/enola.jpg?w=479"},
        {name:"enola holmes", image:"https://javiu.files.wordpress.com/2020/09/enola.jpg?w=479"},
        {name:"enola holmes", image:"https://javiu.files.wordpress.com/2020/09/enola.jpg?w=479"},
        {name:"enola holmes", image:"https://javiu.files.wordpress.com/2020/09/enola.jpg?w=479"},
        {name:"enola holmes", image:"https://javiu.files.wordpress.com/2020/09/enola.jpg?w=479"},
        {name:"enola holmes", image:"https://javiu.files.wordpress.com/2020/09/enola.jpg?w=479"},
        {name:"enola holmes", image:"https://javiu.files.wordpress.com/2020/09/enola.jpg?w=479"},
        {name:"enola holmes", image:"https://javiu.files.wordpress.com/2020/09/enola.jpg?w=479"}
    ]

    return (
        <>
            <Orientation>Selecione o filme</Orientation>
            <Wrapper>
                {arrayMovies.map(m => <MovieCard><img src={m.image}/></MovieCard>)}
            </Wrapper>
        </>
    );
} 
//<img src="https://javiu.files.wordpress.com/2020/09/enola.jpg?w=479"/>
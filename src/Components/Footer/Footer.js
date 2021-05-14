import {Wrapper, Title, Poster,Info} from "./FooterStyles"

export default function Footer(props){
    
    return (
        <Wrapper>
            <Poster>
                <img src={props.info.movie.posterURL} alt=""/>
            </Poster>
            <Info>
                <Title>{props.info.movie.title}</Title>
                {props.page3?<Title>{props.info.day.weekday} - {props.info.session} </Title>:""}
            </Info>
        </Wrapper>
    )
}
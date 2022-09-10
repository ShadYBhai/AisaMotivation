import React, { useEffect, useState } from "react";
import styled  from "styled-components";
import {useNavigate, useLocation} from 'react-router-dom'
import { MovieState } from "./MovieState";

const MovieDetail = () => {
    const history = useNavigate()
    const url = history.location.pathname
    const [movies,setMovies] = useState(MovieState)
        const [movie,setMovie] = useState(null)

    useEffect(()=>{
        const currnetMovie = movies.filter((stateMovie)=>stateMovie.url===url)
        setMovie(currnetMovie)
    },[movies, url])

    return(
    <div>
    {movie &&
        <Details>
        <HeadLine>
        <h1>{movie.title}</h1>
        </HeadLine>
        
        </Details>
    }
    </div>)

}

const Details = styled.div``
const HeadLine = styled.div``

export default MovieDetail;
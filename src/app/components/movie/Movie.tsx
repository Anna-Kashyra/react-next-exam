import React from 'react';
import { IMovie } from "@/app/models/IMovie";

type MovieProps = {
    movie: IMovie;
};

const Movie = ({ movie }: MovieProps) => {
    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average} / 10</p>
        </div>
    );
};

export default Movie;

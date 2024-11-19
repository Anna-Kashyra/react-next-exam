import React from 'react';
import {IMovie} from "@/app/models/IMovie";
import {baseImgUrl} from "@/app/services/variables";
import styles from '@/app/components/(movies)/moviesListCard/MoviesListCard.module.css';

type IMoviePreview = Pick<IMovie, 'poster_path' | 'title' | 'popularity'>;

const MoviesListCard = (movie: IMoviePreview) => {

    const imageUrl = `${baseImgUrl}w185/${movie.poster_path}`;
    return (
        <div className={styles.container}>
            <img src={imageUrl} alt={movie.title}/>
            <h4>{movie.title}</h4>
            <p>{movie.popularity}</p>
        </div>
    );
};

export default MoviesListCard;
import React from "react";
import MoviesListCard from "@/app/components/(movies)/moviesListCard/MoviesListCard";
import {IMovie} from "@/app/models/IMovie";
import {IShow} from "@/app/models/IShow";
import styles from '@/app/components/(movies)/moviesList/MoviesList.module.css';

type MoviesListProps = {
    movies?: IMovie[];
    shows?: IShow[];
};

const MoviesList = ({ movies, shows }: MoviesListProps) => {

    const mediaItems = [
        ...(movies?.map((movie) => ({
            ...movie,
            type: 'movies' as const,
        })) || []),
        ...(shows?.map((show) => ({
            ...show,
            type: 'shows' as const,
        })) || []),
    ];

    return (
            <div className={styles.movie_list}>
                {mediaItems.map((item) => (
                    <MoviesListCard key={item.id} media={item}/>
                ))}
            </div>
    );
};

export default MoviesList;


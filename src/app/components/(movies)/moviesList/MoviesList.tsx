import React from 'react';
import {IMovie} from "@/app/models/IMovie";
import MoviesListCard from "@/app/components/(movies)/moviesListCard/MoviesListCard";
import styles from '@/app/components/(movies)/moviesList/MoviesList.module.css';
import {IShow} from "@/app/models/IShow";

type MoviesListProps = {
    movies?: IMovie[];
    shows?: IShow[];
    title: string;
};

const MoviesList = ({ movies, shows, title }: MoviesListProps) => {

    const mediaItems = movies || shows;
    console.log(mediaItems);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.movie_list}>
                {mediaItems?.map((item) => (
                    <MoviesListCard
                        key={item.id}
                        id={item.id}
                        poster_path={item.poster_path}
                        title={'title' in item ? item.title : item.name}
                        vote_average={item.vote_average}
                    />
                ))}
            </div>
        </div>
    );
};

export default MoviesList;


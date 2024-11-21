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
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.movie_list}>
                {mediaItems.map((item) =>
                    item.type === 'movies' ? (
                        <MoviesListCard
                            key={item.id}
                            id={item.id}
                            poster_path={item.poster_path}
                            vote_average={item.vote_average}
                            genres={item.genres}
                            type="movies"
                            title={item.title}
                        />
                    ) : (
                        <MoviesListCard
                            key={item.id}
                            id={item.id}
                            poster_path={item.poster_path}
                            vote_average={item.vote_average}
                            genres={item.genres}
                            type="shows"
                            name={item.name}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default MoviesList;


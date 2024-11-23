import React from "react";
import {movieService} from "@/app/services/api.movies.service";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";
import styles from "@/app/components/(movies)/popularMovies/PopularMovies.module.css"

const PopularMovies = async () => {

    const popularMovies = await movieService.getPopularMovies();
    return (
        <>
            <h2 className={styles.title}>Popular Movies</h2>
            <MoviesList movies={popularMovies.results}/>
        </>
    );
};

export default PopularMovies;
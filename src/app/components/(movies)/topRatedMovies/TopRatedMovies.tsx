import React from "react";
import {movieService} from "@/app/services/api.movies.service";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";
import styles from "@/app/components/(movies)/popularMovies/PopularMovies.module.css";

const TopRatedMovies = async () => {

    const topRatedMovies = await movieService.getTopRatedMovies();
    return (
        <>
            <h2  className={styles.title}>Top Rated Movies</h2>
            <MoviesList movies={topRatedMovies.results}/>
        </>
    );
};

export default TopRatedMovies;
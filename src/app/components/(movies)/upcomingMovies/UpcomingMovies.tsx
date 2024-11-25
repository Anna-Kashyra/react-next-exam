import React from "react";
import {movieService} from "@/app/services/api.movies.service";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";
import styles from "@/app/components/(movies)/popularMovies/PopularMovies.module.css";

const UpcomingMovies = async () => {

    const upcomingMovies = await movieService.getUpcomingMovies();
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Coming soon</h2>
            <MoviesList movies={upcomingMovies.results}/>
        </div>
    );
};

export default UpcomingMovies;
import React from "react";
import Link from "next/link";
import {Genre, genreService} from "@/app/services/api.genres.service";
import styles from "@/app/components/(genres)/genres/Genres.module.css";

type GenresProps = {
    type: 'movies' | 'shows';
};
const Genres = async ({ type }: GenresProps) => {

    const genres: Genre[] = type === 'movies'
        ? await genreService.getMovieGenres()
        : await genreService.getShowsGenres();

    return (
        <ul className={styles.container}>
            {genres.map((genre) => (
                <li key={genre.id} className={styles.items}>
                    <Link href={`/${type}/genre/${genre.id}`}>
                        {genre.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Genres;

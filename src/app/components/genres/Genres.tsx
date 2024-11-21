import React from 'react';
import Link from 'next/link';
import {genreService} from "@/app/services/api.genres.service";
import styles from "@/app/components/genres/Genres.module.css";

const Genres = async ({ type }: { type: 'movies' | 'shows' }) => {

    const genres = type === 'movies'
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

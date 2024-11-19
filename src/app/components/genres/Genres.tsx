import React from 'react';
import {Genre} from "@/app/services/api.genres.service";
import Link from "next/link";
import styles from "@/app/components/genres/Genres.module.css";

type GenresProps = {
    genresList: Genre[];
    linkPath: (id: number) => string;
};

const Genres: React.FC<GenresProps> = ({ genresList, linkPath }) => (
    <ul className={styles.container}>
        {genresList.map((genre) => (
            <li key={genre.id} className={styles.items}>
                <Link href={linkPath(genre.id)}>{genre.name}</Link>
            </li>
        ))}
    </ul>
);

export default Genres;
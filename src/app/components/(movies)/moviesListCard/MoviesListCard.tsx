import React from 'react';
import {baseImgUrl} from "@/app/services/variables";
import styles from '@/app/components/(movies)/moviesListCard/MoviesListCard.module.css';
import StarRating from "@/app/components/starRating/StarRating";
import Link from "next/link";

type MediaPreview = {
    id: number;
    poster_path: string;
    vote_average: number;
    title?: string;
    name?: string;
} & ({ title: string } | { name: string });

const MoviesListCard = (media: MediaPreview) => {
    const title = media.title || media.name;
    const imageUrl = `${baseImgUrl}w185/${media.poster_path}`;
    return (
        <Link href={`/${media.id}`}>
            <div className={styles.container}>
                <img src={imageUrl} alt={title}/>
                <div className={styles.description}>
                    <h3 className={styles.title}>{title}</h3>
                    <StarRating vote_average={media.vote_average}/>
                </div>
            </div>
        </Link>

    );
};

export default MoviesListCard;
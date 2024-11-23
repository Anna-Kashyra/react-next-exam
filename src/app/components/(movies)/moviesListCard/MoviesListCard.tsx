import React from "react";
import Image from "next/image";
import Link from "next/link";
import StarRating from "@/app/components/starRating/StarRating";
import {baseImgUrl} from "@/app/services/variables";
import styles from '@/app/components/(movies)/moviesListCard/MoviesListCard.module.css';
import {IMovie} from "@/app/models/IMovie";
import {IShow} from "@/app/models/IShow";
import Placeholder from "../../../../../public/Placeholder.svg";

type CardProps = {
    media: IMovie | IShow;
};

const MoviesListCard = ({ media }: CardProps) => {
    const title = 'title' in media ? media.title : media.name;
    const imageUrl = media.poster_path
        ? `${baseImgUrl}w185/${media.poster_path}`
        : Placeholder;

    const genresBadge = media.genres && media.genres.length > 0
        ? media.genres.map((genre) => genre.name).join(', ')
        : 'No genres';

    const mediaType = 'title' in media ? 'movies' : 'shows';
    const mediaId = media.id;

    return (
        <Link href={`/${mediaType === 'movies' ? 'movies' : 'shows'}/${mediaId}`} className={styles.container}>
            <div className={styles.genresBadge}>
                {genresBadge}
            </div>
            <Image src={imageUrl} alt={title} width={185} height={270}/>
            <div className={styles.description}>
                <h3 className={styles.title}>{title}</h3>
                <StarRating vote_average={media.vote_average}/>
            </div>
        </Link>
    );
};

export default MoviesListCard;

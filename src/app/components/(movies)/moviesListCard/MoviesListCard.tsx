import React from 'react';
import {baseImgUrl} from "@/app/services/variables";
import styles from '@/app/components/(movies)/moviesListCard/MoviesListCard.module.css';
import StarRating from "@/app/components/starRating/StarRating";
import Image from "next/image";
import Link from "next/link";
import {IMovie} from "@/app/models/IMovie";
import {IShow} from "@/app/models/IShow";

// type CardProps = (IMovie & { type: 'movies' }) | (IShow & { type: 'shows' });

type CardProps = Pick<IMovie, 'id' | 'poster_path' | 'title' | 'vote_average' | 'genres'> & { type: 'movies' } |
    Pick<IShow, 'id' | 'poster_path' | 'name' | 'vote_average' | 'genres'> & { type: 'shows' };

const MoviesListCard = ({ id, poster_path, vote_average, type, genres, ...rest }: CardProps) => {

    const title = type === 'movies' ? (rest as IMovie).title : (rest as IShow).name;
    const imageUrl = `${baseImgUrl}w185/${poster_path}`;
    return (
        <Link href={`/${type}/${id}`}>
            <div className={styles.container}>
                <Image src={imageUrl} alt={title} width={185} height={278}/>
                <div className={styles.description}>
                    <h3 className={styles.title}>{title}</h3>
                    <StarRating vote_average={vote_average} />
                    {genres && <p>Genres: {genres.join(", ")}</p>}
                </div>
            </div>
        </Link>

    );
};

export default MoviesListCard;
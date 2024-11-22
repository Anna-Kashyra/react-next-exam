import React from 'react';
import { IMovie } from "@/app/models/IMovie";
import { IShow } from "@/app/models/IShow";
import {baseImgUrl} from "@/app/services/variables";
import Image from "next/image";
import styles from "@/app/components/mediaDetails/MediaDetails.module.css";

type MediaDetailsProps = {
    media: IMovie | IShow;
};

const MediaDetails = ({ media }: MediaDetailsProps) => {
    const title = 'title' in media ? media.title : media.name;
    const releaseDate = 'release_date' in media ? media.release_date : media.first_air_date;
    const imageUrl = `${baseImgUrl}w500/${media.poster_path}`

    return (
        <article className={styles.container}>
            <Image src={imageUrl} alt={title} width={500} height={750}/>
            <div className={styles.description}>
                <div className={styles.date_rating}>
                    <p>Release Date: {releaseDate || 'Unknown'}</p>
                    <p>Rating: {media.vote_average || 'Not rated'} / 10 </p>
                </div>
                <p>{media.overview || 'Description not available.'}</p>
                <p> {('genres' in media && media.genres?.length)
                    ? `Genres: ${media.genres.map((genre) => genre.name).join(', ')}`
                    : 'Genres not available.'}</p>
                <p>Duration: {'runtime' in media ? media.runtime : 'No Data'} minutes</p>
                <p>Tagline: {'tagline' in media ? media.tagline : 'No Data'}</p>
                <p>Budget: {'budget' in media ? `$${media.budget}` : 'No Data'}</p>
                <p>Revenue: {'revenue' in media ? `$${media.revenue}` : 'No Data'}</p>
            </div>
        </article>
    );
};

export default MediaDetails;

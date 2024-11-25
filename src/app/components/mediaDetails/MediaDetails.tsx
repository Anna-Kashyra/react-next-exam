import React, {FC} from "react";
import Image from "next/image";
import { IMovie } from "@/app/models/IMovie";
import { IShow } from "@/app/models/IShow";
import {baseImgUrl} from "@/app/services/variables";
import styles from "@/app/components/mediaDetails/MediaDetails.module.css";
import Placeholder from "../../../../public/Placeholder.svg";

type MediaDetailsProps = {
    media: IMovie | IShow;
};

const isShow = (media: IMovie | IShow): media is IShow => {
    return 'first_air_date' in media;
};

const MediaDetails: FC<MediaDetailsProps> = ({ media }: MediaDetailsProps) => {
    const title = 'title' in media ? media.title : media.name;
    const releaseDate = isShow(media) ? media.first_air_date : media.release_date;
    const imageUrl = media.poster_path
        ? `${baseImgUrl}w500/${media.poster_path}`
        : Placeholder;

    return (
        <article className={styles.container}>
            <div className={styles.image_wrapper}>
                <Image src={imageUrl} alt={title} fill
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
            </div>

            <div className={styles.description}>
                <div className={styles.date_rating}>
                    <p><span>Release Date: </span> {releaseDate || 'Unknown'}</p>
                    <p><span>Rating: </span> {media.vote_average || 'Not rated'} / 10 </p>
                </div>
                <p className={styles.genres}><span>Genres: </span> {('genres' in media && media.genres?.length)
                    ? `${media.genres.map((genre) => genre.name).join(', ')}`
                    : 'Genres not available.'}</p>

                <p className={styles.production}><span>Production: </span> {('production_countries' in media && media.production_countries?.length)
                    ? `${media.production_countries.map((production) => production.name).join(', ')}`
                    : 'Production not available.'}</p>

                <div className={styles.overview}>
                    <p>Overview:</p>
                    <p>{media.overview || 'Description not available.'}</p>
                </div>
                <p className={styles.tagline}>{'tagline' in media ? media.tagline : 'No Data'}</p>
                <p className={styles.duration}><span>Duration: </span> {'runtime' in media ? media.runtime : 'No Data'} minutes</p>
                <p className={styles.budget}><span>Budget: </span> {'budget' in media ? `$${media.budget}` : 'No Data'}</p>
                <p className={styles.revenue}><span>Revenue: </span> {'revenue' in media ? `$${media.revenue}` : 'No Data'}</p>
            </div>
        </article>
    );
};

export default MediaDetails;

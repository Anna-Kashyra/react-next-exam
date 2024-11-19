import React from 'react';
import {IShow} from "@/app/models/IShow";
import {baseImgUrl} from "@/app/services/variables";
import styles from "@/app/components/(shows)/show/Show.module.css";

type IShowPreview = Pick<IShow, 'poster_path' | 'name' | 'popularity'>;

const Show = (show: IShowPreview) => {

    const imageUrl = `${baseImgUrl}w185${show.poster_path}`;
    return (
        <div className={styles.container}>
            <img src={imageUrl} alt={show.name}/>
            <h4>{show.name}</h4>
            <p>{show.popularity}</p>
        </div>
    );
};

export default Show;
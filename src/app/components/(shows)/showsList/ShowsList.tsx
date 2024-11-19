import React from 'react';
import {IShow} from "@/app/models/IShow";
import styles from "@/app/components/(shows)/showsList/ShowsList.module.css"
import Show from "@/app/components/(shows)/show/Show";

const ShowsList = ({ shows, title }: { shows: IShow[]; title: string }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.show_list}>
                {shows.map((show: IShow) => (
                    <Show key={show.id} poster_path={show.poster_path} name={show.name} popularity={show.popularity}/>
                ))}
            </div>
        </div>
    );
};

export default ShowsList;
import React from 'react';
import {IMovie} from "@/app/models/IMovie";
import MoviesListCard from "@/app/components/(movies)/moviesListCard/MoviesListCard";
import styles from '@/app/components/(movies)/moviesList/MoviesList.module.css';

const MoviesList = ({ movies, title }: { movies: IMovie[]; title: string }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.movie_list}>
                {movies.map((movie: IMovie) => (
                    <MoviesListCard key={movie.id} poster_path={movie.poster_path} title={movie.title} popularity={movie.popularity}/>
                ))}
            </div>
        </div>
    );
};

export default MoviesList;

// import React from 'react';
// import { IMedia } from "@/app/models/IMedia";
// import MoviesListCard from "@/app/components/(movies)/moviesListCard/MoviesListCard";
// import styles from '@/app/components/(movies)/moviesList/MoviesList.module.css';
//
//
//
// const MoviesList = ({ mediaItems, title }: { mediaItems: IMedia[]; title: string }) => {
//     return (
//         <div className={styles.container}>
//             <h2 className={styles.title}>{title}</h2>
//             <div className={styles.movie_list}>
//                 {mediaItems.map((media: IMedia) => (
//                     <MoviesListCard
//                         key={media.id}
//                         poster_path={media.poster_path}
//                         title={'title' in media ? media.title : media.name}
//                         popularity={media.popularity}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default MoviesList;

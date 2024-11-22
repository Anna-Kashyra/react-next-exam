// import React from 'react';
// import fetchMediaByTypeAndGenre from "@/app/services/fetchMedia";
// import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";
// import {IMovie} from "@/app/models/IMovie";
// import {IShow} from "@/app/models/IShow";
//
// type MediaByGenreProps = {
//     type: 'movies' | 'shows';
//     genreId: string;
// };
//
// const MediaByGenre = async ({ type, genreId }: MediaByGenreProps) => {
//
//     const media = await fetchMediaByTypeAndGenre(type, genreId);
//
//     return (
//         <MoviesList
//             movies={type === 'movies' ? (media.results as IMovie[]) : undefined}
//             shows={type === 'shows' ? (media.results as IShow[]) : undefined}
//         />
//     );
// };
//
// export default MediaByGenre;

import React from 'react';
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";
import {IMovie} from "@/app/models/IMovie";
import {IShow} from "@/app/models/IShow";
import {AllMediasProps} from "@/app/models/PaginationProps";
import Pagination from "@/app/components/pagination/Pagination";
import fetchMediaByTypeAndGenre from "@/app/services/fetchMedia";

type MediaByGenreProps = {
    type: 'movies' | 'shows';
    genreId: string;
};

type CombinedMediaByGenreProps = MediaByGenreProps & AllMediasProps;

const MediaByGenre = async ({ type, genreId, currentPage }: CombinedMediaByGenreProps) => {

    const media = await fetchMediaByTypeAndGenre(type, genreId);

    return (
        <>
            <MoviesList
                movies={type === 'movies' ? (media.results as IMovie[]) : undefined}
                shows={type === 'shows' ? (media.results as IShow[]) : undefined}
            />
            <Pagination currentPage={currentPage} totalPages={media.total_pages} basePath={`/movies/genre/${genreId}`}/>
        </>

    );
};

export default MediaByGenre;

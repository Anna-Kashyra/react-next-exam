import React from "react";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";
import Pagination from "@/app/components/(navigation)/pagination/Pagination";
import {IMovie} from "@/app/models/IMovie";
import {IShow} from "@/app/models/IShow";
import fetchMediaByTypeAndGenre from "@/app/services/fetchMedia";

type MediaByGenreProps = {
    type: 'movies' | 'shows';
    genreId: string;
    currentPage: number;
};

const MediaByGenre = async ({ type, genreId, currentPage }: MediaByGenreProps) => {

    const basePath = `/${type}/genre/${genreId}`;
    const media = await fetchMediaByTypeAndGenre(type, genreId, currentPage);

    return (
        <>
            <MoviesList
                movies={type === 'movies' ? (media.results as IMovie[]) : undefined}
                shows={type === 'shows' ? (media.results as IShow[]) : undefined}
            />
            <Pagination currentPage={currentPage} totalPages={media.total_pages} basePath={basePath}/>
        </>

    );
};

export default MediaByGenre;

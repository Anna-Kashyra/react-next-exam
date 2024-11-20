import React from 'react';
import {genreService} from "@/app/services/api.genres.service";
import fetchMediaByTypeAndGenre from "@/app/services/fetchMedia";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";
import {IMovie} from "@/app/models/IMovie";
import {IShow} from "@/app/models/IShow";
import {urlBuilder} from "@/app/services/variables";
import {options} from "@/app/services/options";


type MediaByGenreProps = {
    type: 'movie' | 'show';
    genreId: string;
};

const MediaByGenre = async ({ type, genreId }: MediaByGenreProps) => {
    const media = await fetchMediaByTypeAndGenre(type, genreId);
    console.log("Fetched media:", media);
    const genres = type === 'movie'
        ? await genreService.getMovieGenres()
        : await genreService.getShowsGenres();
    console.log("Genres for type:", genres);

    const currentGenre = genres.find((genre) => genre.id.toString() === genreId);

    const title = currentGenre
        ? `${currentGenre.name} ${type === 'movie' ? 'Movies' : 'Shows'}`
        : 'Media by Genre';

    const response = await fetch(urlBuilder.moviesByGenre(genreId), options);
    const data = await response.json();
    console.log("Response:", data);

    return (
        <MoviesList
            title={title}
            movies={type === 'movie' ? (media.results as IMovie[]) : undefined}
            shows={type === 'show' ? (media.results as IShow[]) : undefined}
        />
    );
};

export default MediaByGenre;

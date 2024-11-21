import React from 'react';
import {genreService} from "@/app/services/api.genres.service";
import fetchMediaByTypeAndGenre from "@/app/services/fetchMedia";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";
import {IMovie} from "@/app/models/IMovie";
import {IShow} from "@/app/models/IShow";

type MediaByGenreProps = {
    type: 'movies' | 'shows';
    genreId: string;
};

const MediaByGenre = async ({ type, genreId }: MediaByGenreProps) => {
    const media = await fetchMediaByTypeAndGenre(type, genreId);

    const genres = type === 'movies'
        ? await genreService.getMovieGenres()
        : await genreService.getShowsGenres();

    const currentGenre = genres.find((genre) => genre.id.toString() === genreId);

    const title = currentGenre
        ? `${currentGenre.name} ${type === 'movies' ? 'Movies' : 'Shows'}`
        : 'Media by Genre';

    return (
        <MoviesList
            title={title}
            movies={type === 'movies' ? (media.results as IMovie[]) : undefined}
            shows={type === 'shows' ? (media.results as IShow[]) : undefined}
            type={type}
        />
    );
};

export default MediaByGenre;

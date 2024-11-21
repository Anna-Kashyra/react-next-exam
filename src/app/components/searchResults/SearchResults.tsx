import React, { FC } from 'react';
import {urlBuilder} from "@/app/services/variables";
import {options} from "@/app/services/options";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";
import {IMovie} from "@/app/models/IMovie";
import {IShow} from "@/app/models/IShow";

type SearchResultsProps = {
    query: string;
};

const SearchResults: FC<SearchResultsProps> = async ({ query }) => {
    const response = await fetch(urlBuilder.search(query), options);
    const data = await response.json();

    const movies = data.results.filter((item: any) => item.media_type === "movie");
    const shows = data.results.filter((item: any) => item.media_type === "tv");

    const mediaItems: Array<(IMovie & { type: "movies" }) | (IShow & { type: "shows" })> = [
        ...movies.map((movie: IMovie) => ({ ...movie, type: "movies" })),
        ...shows.map((show: IShow) => ({ ...show, type: "shows" })),
    ];
    return (
        <>
            <h1>Search Results for &quot;{query}&quot;</h1>
            {mediaItems.length > 0 ? (
                <MoviesList movies={mediaItems as IMovie[]} title="Search Results" type="movies" />
            ) : (
                <p>No results found for &quot;{query}&quot;.</p>
            )}
        </>
    );
};

export default SearchResults;

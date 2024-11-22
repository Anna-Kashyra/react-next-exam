import React, { FC } from 'react';
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";
import {IMovie} from "@/app/models/IMovie";
import {IShow} from "@/app/models/IShow";
import {searchService} from "@/app/services/api.search.service";

type SearchResultsProps = {
    query: string;
};

const SearchResults: FC<SearchResultsProps> = async ({ query }) => {

    const data = await searchService.getSearchResults(query);

    const movies = data.results.filter((item) => item.media_type === "movie") as IMovie[];
    const shows = data.results.filter((item) => item.media_type === "tv") as IShow[];

    return (
        <>
            {movies.length > 0 || shows.length > 0 ? (
                <MoviesList movies={movies} shows={shows} />
            ) : (
                <p>No results found for &quot;{query}&quot;.</p>
            )}
        </>
    );
}

export default SearchResults;




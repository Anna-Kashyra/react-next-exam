import React, { FC } from "react";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";
import Pagination from "@/app/components/(navigation)/pagination/Pagination";
import {IMovie} from "@/app/models/IMovie";
import {IShow} from "@/app/models/IShow";
import {searchService} from "@/app/services/api.search.service";

type SearchResultsProps = {
    query: string;
    page?: string;
};

const SearchResults: FC<SearchResultsProps> = async ({ query, page }) => {

    const currentPage = parseInt(page || "1", 10);
    const data = await searchService.getSearchResults(query, currentPage);

    const movies = data.results.filter((item) => item.media_type === "movie") as IMovie[];
    const shows = data.results.filter((item) => item.media_type === "tv") as IShow[];

    const basePath = `/search?query=${encodeURIComponent(query)}`;

    return (
        <div>
            {movies.length > 0 || shows.length > 0 ? (
                <>
                    <MoviesList movies={movies} shows={shows} />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={data.total_pages}
                        basePath={basePath}
                    />
                </>
            ) : (
                <p>No results found for &quot;{query}&quot;.</p>
            )}
        </div>
    );
}

export default SearchResults;




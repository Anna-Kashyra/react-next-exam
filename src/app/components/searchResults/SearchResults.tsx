import React, { FC } from 'react';
import {urlBuilder} from "@/app/services/variables";
import {options} from "@/app/services/options";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";


type SearchResultsProps = {
    query: string;
};

const SearchResults: FC<SearchResultsProps> = async ({ query }) => {
    const response = await fetch(urlBuilder.search(query), options);
    const data = await response.json();

    return (
        <>
            <h1>Search Results for &quot;{query}&quot;</h1>
            <MoviesList movies={data.results} title={''}/>
        </>
    );
};

export default SearchResults;

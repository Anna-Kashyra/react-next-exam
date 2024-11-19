import React, { FC } from 'react';
import {options, urlBuilder} from "@/app/services/variables";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";
import ShowsList from "@/app/components/(shows)/showsList/ShowsList";

type SearchResultsProps = {
    query: string;
};

const SearchResults: FC<SearchResultsProps> = async ({ query }) => {
    const response = await fetch(urlBuilder.search(query), options);
    const data = await response.json();

    return (
        <>
            <h1>Search Results for "{query}"</h1>

            <MoviesList movies={data.results} title={''}/>

            {/*<ul>*/}
            {/*    {data.results?.map((result: any) => (*/}
            {/*        <li key={result.id}>*/}
            {/*            {result.title || result.name}*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul> */}

        </>
    );
};

export default SearchResults;

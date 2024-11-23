import React from "react";
import SearchResults from "@/app/components/(search)/searchResults/SearchResults";

type SearchPageProps = {
    searchParams: { query: string; page?: string };
};

const SearchPage = (props: SearchPageProps) => {
    const query = props.searchParams.query || "";
    const page = props.searchParams.page;

    return (
        <>
            {query.trim() ? (
                <>
                    <h1>Search results for  &quot;{query}&quot;</h1>
                    <SearchResults query={query} page={page}/>
                </>
            ) : (
                <p>Please enter a search term to see results.</p>
            )}
        </>
    );
};

export default SearchPage;

import React from "react";
import SearchResults from "@/app/components/(search)/searchResults/SearchResults";

type SearchPageProps = {
    searchParams: Promise<{ query: string; page?: string }>;
};

const SearchPage = async (props: SearchPageProps) => {

    const { query = '', page } = await props.searchParams;

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

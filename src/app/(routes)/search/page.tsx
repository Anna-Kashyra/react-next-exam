import React from "react";
import SearchResults from "@/app/components/(search)/searchResults/SearchResults";
import styles from "@/app/page.module.css";

type SearchPageProps = {
    searchParams: { query: string; page?: string };
};

const SearchPage = (props: SearchPageProps) => {
    const query = props.searchParams.query || "";
    const page = props.searchParams.page;

    return (
        <main className={styles.main}>
            {query.trim() ? (
                <>
                    <h1>Search results for  &quot;{query}&quot;</h1>
                    <SearchResults query={query} page={page}/>
                </>
            ) : (
                <p>Please enter a search term to see results.</p>
            )}
        </main>
    );
};

export default SearchPage;
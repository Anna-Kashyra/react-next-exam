import React from 'react';
import SearchResults from "@/app/components/searchResults/SearchResults";
import styles from "@/app/page.module.css";

const SearchPage = ({ searchParams }: { searchParams: { query: string } }) => {
    const { query } = searchParams;

    return (
        <main className={styles.main}>
            <SearchResults query={query} />
        </main>
    );
};

export default SearchPage;

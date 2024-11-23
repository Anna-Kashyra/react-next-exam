import React from "react";
import {Metadata} from "next";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
    title: "Search | The Best Movies",
    description: "Search for your favorite movies and TV shows.",
}

type Props = { children: React.ReactNode };
const SearchLayout = ({children}: Props) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    );
};

export default SearchLayout;
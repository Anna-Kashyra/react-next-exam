import React from "react";
import {Metadata} from "next";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
    title: "Movies | The Best Movies",
    description: "Explore the best movies from all genres and categories.",
}

type Props = { children: React.ReactNode };
const MoviesLayout = ({children}: Props) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    );
};

export default MoviesLayout;
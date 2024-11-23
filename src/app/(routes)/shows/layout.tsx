import React from "react";
import {Metadata} from "next";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
    title: "TV Shows | The Best Movies",
    description: "Explore the best TV shows from all genres and categories.",
}

type Props = { children: React.ReactNode };
const ShowsLayout = ({children}: Props) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    );
};

export default ShowsLayout;
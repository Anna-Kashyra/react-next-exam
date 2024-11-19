import React from "react";
import {Metadata} from "next";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
    title: 'MoviesLayout metadata'
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
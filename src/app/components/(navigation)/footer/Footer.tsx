import React from "react";
import Image from "next/image";
import theBestMovies from "../../../../../public/theBestMoviesW.svg";
import TMDBLogo from "../../../../../public/TMDBLogo.svg"
import Menu from "@/app/components/(navigation)/menu/Menu";
import styles from "@/app/components/(navigation)/footer/Footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href={'/'}>
                <Image
                    className={styles.logo}
                    src={theBestMovies}
                    alt="The Best Movies Logo"
                    loading={"eager"}
                    width={120}
                    height={38}
                />
            </Link>
            <Menu/>
            <div>
                <Image
                    className={styles.logo}
                    src={TMDBLogo}
                    alt="The Best Movies Logo"
                    loading={"eager"}
                    width={100}
                />
                <p>
                    This product uses the TMDB API but is not endorsed or certified by TMDB.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
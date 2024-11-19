import React from 'react';
import Image from "next/image";
import theBestMovies from "../../../../public/theBestMoviesW.svg";
import Menu from "@/app/components/menu/Menu";
import styles from "@/app/components/footer/Footer.module.css";
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
                    width={100}
                />
            </Link>
            <Menu/>
        </footer>
    );
};

export default Footer;
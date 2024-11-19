import React from 'react';
import Image from "next/image";
import theBestMovies from "../../../../public/theBestMoviesW.svg";
import Menu from "@/app/components/menu/Menu";
import styles from "@/app/components/header/Header.module.css";
import Link from "next/link";
import Search from "@/app/components/search/Search";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href={'/'}>
                <Image
                    className={styles.logo}
                    src={theBestMovies}
                    alt="The Best Movies Logo"
                    loading={"eager"}
                    width={120}
                />
            </Link>
            <Menu/>
            <Search/>
            <button>Log in</button>
        </header>
    );
};

export default Header;
import React from "react";
import Image from "next/image";
import Link from "next/link";
import theBestMovies from "../../../../../public/theBestMoviesW.svg";
import Menu from "@/app/components/(navigation)/menu/Menu";
import Search from "@/app/components/(search)/search/Search";
import LoginButton from "@/app/components/(auth)/loginButton/LoginButton";
import styles from "@/app/components/(navigation)/header/Header.module.css";

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
                    height={38}
                />
            </Link>
            <Menu/>
            <Search/>
            <LoginButton/>
        </header>
    );
};

export default Header;
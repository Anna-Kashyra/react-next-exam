import React from "react";
import Link from "next/link";
import styles from '@/app/components/(navigation)/menu/Menu.module.css';

const Menu = () => {
    return (
        <div>
            <ul className={styles.menu}>
                <li>
                    <Link href={'/movies'} className={styles.link}>Movies</Link>
                </li>
                <li>
                    <Link href={'/shows'} className={styles.link}>TV Shows</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
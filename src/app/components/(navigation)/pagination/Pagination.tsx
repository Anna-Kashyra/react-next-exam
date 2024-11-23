import React from "react";
import Link from "next/link";
import styles from "@/app/components/(navigation)/pagination/Pagination.module.css";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    basePath: string;
};

const Pagination = ({ currentPage, totalPages, basePath }: PaginationProps) => {
    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    return (
        <div className={styles.pagination}>
            {prevPage && (
                <Link href={`${basePath}?page=${prevPage}`} className={styles.pagination_button}>
                    &#60;
                </Link>
            )}
            <span className={styles.pages}>{currentPage} of {totalPages}</span>
            {nextPage && (
                <Link href={`${basePath}?page=${nextPage}`} className={styles.pagination_button}>
                    &#62;
                </Link>
            )}
        </div>
    );
};

export default Pagination;
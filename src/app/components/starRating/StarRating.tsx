import React from "react";
import styles from "@/app/components/starRating/StarRating.module.css";

type StarRatingProps = {
    vote_average: number;
};

const StarRating = ({ vote_average }: StarRatingProps) => {
    const filledStars = Math.min(Math.round(vote_average / 2), 5);
    const emptyStars = 5 - filledStars;

    const filledStarArray = Array.from({ length: filledStars }, (_, index) => (
        <span key={`filled-${index}`} className={styles.filled}>★</span>
    ));
    const emptyStarArray = Array.from({ length: emptyStars }, (_, index) => (
        <span key={`empty-${index}`} className={styles.empty}>★</span>
    ));

    return (
        <div className={styles.star_rating}>
            {filledStarArray}
            {emptyStarArray}
        </div>
    );
};

export default StarRating;

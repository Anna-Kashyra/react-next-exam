import React from "react";
import { genreService } from "@/app/services/api.genres.service";
import type { Metadata } from "next";

type GenreLayoutProps = {
    children: React.ReactNode;
    params: { id: string };
};

export async function generateMetadata({ params }: GenreLayoutProps): Promise<Metadata> {
    const genres = await genreService.getMovieGenres();
    const currentGenre = genres.find((genre) => genre.id.toString() === params.id);

    return {
        title: currentGenre
            ? `${currentGenre.name} Movies | The Best Movies`
            : "Unknown Genre | The Best Movies",
        description: currentGenre
            ? `Discover the best movies in the ${currentGenre.name} genre.`
            : "Explore movies by genre.",
    };
}

 const MoviesGenreLayout = async ({ children, params }: GenreLayoutProps) => {
    const genres = await genreService.getMovieGenres();
    const currentGenre = genres.find((genre) => genre.id.toString() === params.id);

    if (!currentGenre) {
        return <div>Genre not found</div>;
    }

    return (
        <>
            <h1>{currentGenre.name} Movies</h1>
            {children}
        </>
    );
 }

export default MoviesGenreLayout

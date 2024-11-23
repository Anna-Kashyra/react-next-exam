import React from "react";
import { genreService } from "@/app/services/api.genres.service";
import type { Metadata } from "next";

type GenreLayoutProps = {
    children: React.ReactNode;
    params: { id: string };
};

export async function generateMetadata({ params }: GenreLayoutProps): Promise<Metadata> {
    const genres = await genreService.getShowsGenres();
    const currentGenre = genres.find((genre) => genre.id.toString() === params.id);

    return {
        title: currentGenre
            ? `${currentGenre.name} TV Shows | The Best Movies`
            : "Unknown Genre | The Best Movies",
        description: currentGenre
            ? `Discover the best TV shows in the ${currentGenre.name} genre.`
            : "Explore shows by genre.",
    };
}

const ShowsGenreLayout = async ({ children, params }: GenreLayoutProps) => {
    const genres = await genreService.getShowsGenres();
    const currentGenre = genres.find((genre) => genre.id.toString() === params.id);

    if (!currentGenre) {
        return <div>Genre not found</div>;
    }

    return (
        <>
            <h1>{currentGenre.name} TV Shows</h1>
            {children}
        </>
    );
}

export default ShowsGenreLayout

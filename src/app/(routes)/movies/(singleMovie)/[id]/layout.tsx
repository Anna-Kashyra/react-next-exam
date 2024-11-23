import React from "react";
import {Metadata} from "next";
import {movieService} from "@/app/services/api.movies.service";

type Props = { params: { id: string } };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const movie = await movieService.getMovieById(params.id);
    return {
        title: `${movie.title} | The Best Movies`,
        description: `Learn more about ${movie.title}`,
    };
}

const SingleMovieLayout = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
}
export default SingleMovieLayout;
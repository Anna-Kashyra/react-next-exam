import React from 'react';
import { movieService } from "@/app/services/api.movies.service";
import Movie from "@/app/components/movie/Movie";

type MovieDetailsProps = {
    params: { id: string };
};

const MovieDetailsPage = async ({ params }: MovieDetailsProps) => {
    const movie = await movieService.getMovieById(params.id);

    return <Movie movie={movie} />;
};

export default MovieDetailsPage;

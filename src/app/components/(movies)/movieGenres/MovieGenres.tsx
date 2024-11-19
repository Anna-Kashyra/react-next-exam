import React from 'react';

import { genreService } from '@/app/services/api.genres.service';
import Genres from '@/app/components/genres/Genres';

const MovieGenres: React.FC = async () => {
    const genresList = await genreService.getMovieGenres();

    return (
        <Genres
            genresList={genresList}
            linkPath={(id) => `/movies/genre/${id}`}
        />
    );
};

export default MovieGenres;
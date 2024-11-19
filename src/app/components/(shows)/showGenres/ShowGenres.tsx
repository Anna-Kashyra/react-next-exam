import React from 'react';
import { genreService } from '@/app/services/api.genres.service';
import Genres from '@/app/components/genres/Genres';

const ShowGenres: React.FC = async () => {
    const genresList = await genreService.getShowsGenres();

    return (
        <Genres
            genresList={genresList}
            linkPath={(id) => `/shows/genre/${id}`}
        />
    );
};

export default ShowGenres;

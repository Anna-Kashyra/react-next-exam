// import React from 'react';
// import Genres from "@/app/components/genres/Genres";
// import MediaByGenre from "@/app/components/mediaByGenre/MediaByGenre";
// import {genreService} from "@/app/services/api.genres.service";
//
// type Params = {
//     params: { id: string };
// };
// export default async function MoviesByGenrePage ({ params }: Params) {
//
//     const genreId = params.id;
//
//     const genres = await genreService.getMovieGenres();
//     const currentGenre = genres.find((genre) => genre.id.toString() === genreId);
//
//     const title = currentGenre
//         ? `${currentGenre.name} Movies`
//         : 'Unknown Genre';
//
//     return (
//         <>
//             <Genres type={'movies'}/>
//             <h1>{title}</h1>
//             <MediaByGenre type={'movies'} genreId={genreId}/>
//         </>
//     );
// };

import React from 'react';
import Genres from "@/app/components/genres/Genres";
import MediaByGenre from "@/app/components/mediaByGenre/MediaByGenre";
import {genreService} from "@/app/services/api.genres.service";
import {SearchParamsProps} from "@/app/models/PaginationProps";

type Params = {
    params: { id: string }
}

type CombinedParams = SearchParamsProps & Params;

export default async function MoviesByGenrePage ({ searchParams, params }: CombinedParams) {

    const currentPage = parseInt(searchParams.page || "1", 10);
    const genreId = params.id;

    const genres = await genreService.getMovieGenres();
    const currentGenre = genres.find((genre) => genre.id.toString() === genreId);

    const title = currentGenre
        ? `${currentGenre.name} Movies`
        : 'Unknown Genre';

    return (
        <>
            <Genres type={'movies'}/>
            <h1>{title}</h1>
            <MediaByGenre type={'movies'} genreId={genreId} currentPage={currentPage}/>
        </>
    );
};

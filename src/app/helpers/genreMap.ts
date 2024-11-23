import {Genre} from "@/app/services/api.genres.service";

export const createGenreMap = (genres: Genre[]): Map<number, string> => {
    const genreMap = new Map<number, string>();
    genres.forEach(genre => {
        genreMap.set(genre.id, genre.name);
    });
    return genreMap;
};
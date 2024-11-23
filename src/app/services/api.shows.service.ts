import {urlBuilder} from "@/app/services/variables";
import {options} from "@/app/services/options";
import {IBaseResponse} from "@/app/models/IBaseResponse";
import {IShow} from "@/app/models/IShow";
import {GetMediasParams} from "@/app/models/PaginationProps";

const fetchShowsData = async (url: string): Promise<IBaseResponse & { results: IShow[] }> => {
    const response = await fetch(url, options);
    return await response.json();
};

const showService = {
    getShows: async ({ page = 1 }: GetMediasParams): Promise<IBaseResponse & { results: IShow[] }> => {
        return fetchShowsData(urlBuilder.allShows(page));
    },

    getShowsByGenre: async (genreId: string, page = 1): Promise<IBaseResponse & { results: IShow[] }> => {
        return fetchShowsData(urlBuilder.showsByGenre(genreId, page));
    },

    getShowById: async (id: string): Promise<IShow> => {
        const response = await fetch(urlBuilder.showById(id), options);
        return await response.json();
    }
}

export {showService};
showService.getShowsByGenre("80", 1).then(data => console.log(data));
import {urlBuilder} from "@/app/services/variables";
import {options} from "@/app/services/options";
import {IBaseResponse} from "@/app/models/IBaseResponse";
import {IShow} from "@/app/models/IShow";
import {GetMediasParams} from "@/app/models/PaginationProps";

const showService = {
    getShows: async ({ page = 1 }: GetMediasParams): Promise<IBaseResponse & {results: IShow[]}> => {
        return await fetch(urlBuilder.allShows(page), options)
            .then(value => value.json());
    },

    getShowsByGenre: async (genreId: string): Promise<IBaseResponse & {results: IShow[]}> => {
        return await fetch(urlBuilder.showsByGenre(genreId), options)
            .then(response => response.json())
    },

    getShowById: async (id: string): Promise<IShow> => {
        return await fetch(urlBuilder.showById(id), options)
            .then(value => value.json())
    }
}

export {showService};
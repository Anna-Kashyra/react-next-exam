import {urlBuilder} from "@/app/services/variables";
import {options} from "@/app/services/options";
import {IBaseResponse} from "@/app/models/IBaseResponse";
import {IShow} from "@/app/models/IShow";

const showService = {
    getShows: async (): Promise<IBaseResponse & {results: IShow[]}> => {
        return await fetch(urlBuilder.allShows(), options)
            .then(value => value.json());
    },

    getShowsByGenre: async (genreId: string): Promise<IBaseResponse & {results: IShow[]}> => {
        return await fetch(urlBuilder.showsByGenre(genreId), options)
            .then(response => response.json())
    },
}

export {showService};
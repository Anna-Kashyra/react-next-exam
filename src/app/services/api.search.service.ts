import {IMovie} from "@/app/models/IMovie";
import {IShow} from "@/app/models/IShow";
import {urlBuilder} from "@/app/services/variables";
import {options} from "@/app/services/options";
import {IPerson} from "@/app/models/IPerson";

type SearchResponse = {
    page: number;
    total_pages: number;
    total_results: number;
    results: (IMovie | IShow | IPerson)[];
}
const searchService = {
    getSearchResults: async (query: string, page: number = 1): Promise<SearchResponse> => {
        return await fetch(`${urlBuilder.search(query)}&page=${page}`, options)
            .then(value => value.json());
    }
}

export {searchService};
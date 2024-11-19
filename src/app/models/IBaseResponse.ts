import {IMovie} from "@/app/models/IMovie";
import {IShow} from "@/app/models/IShow";

export interface IBaseResponse {
    page: number;
    total_pages: number;
    total_results: number;
}
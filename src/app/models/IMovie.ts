export interface IMovie {
	adult?: boolean;
	backdrop_path?: string;
	genres?: {
			id: number;
			name: string;
		}[];
	genre_ids?: number[];
	id: number;
	original_language?: string;
	original_title?: string;
	overview?: string;
	popularity?: number;
	poster_path: string;
	release_date?: string;
	title: string;
	runtime?: number;
	video?: boolean;
	vote_average: number;
	vote_count?: number;
	media_type?: string;
	production_countries?: {
			iso_3166_1: string;
			name: string;
		}[];
	budget?: number;
	homepage?: string;
}

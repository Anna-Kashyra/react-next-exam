export interface IShow {
	adult?: boolean;
	backdrop_path?: string;
	genres?: {
			id: number;
			name: string;
		}[];
	genre_ids?: number[];
	id: number;
	origin_country?: string[];
	original_language?: string;
	original_name?: string;
	overview?: string;
	popularity?: number;
	poster_path: string;
	first_air_date?: string;
	name: string;
	tagline?: string;
	vote_average: number;
	vote_count?: number;
	media_type?: string;
	type?: string;
	production_countries?: {
		iso_3166_1: string;
		name: string;
	}[];
	homepage?: string;
	number_of_episodes?: number;
	number_of_seasons?: number;
	seasons?: ISeason[];
}

export interface ISeason {
	air_date: string;
	episode_count: number;
	id: number;
	name: string;
	overview: string;
	poster_path: string;
	season_number: number;
	vote_average: number;
}
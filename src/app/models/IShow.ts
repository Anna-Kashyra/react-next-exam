export interface IShow {
	adult: boolean;
	backdrop_path: string;
	genres?: IGenre[];
	id: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	first_air_date: string;
	name: string;
	tagline?: string;
	vote_average: number;
	vote_count: number;
	media_type?: string;
	production_countries: ICountries[];
}

interface IGenre {
	id: number;
	name: string
}

interface ICountries {
	iso_3166_1: string;
	name: string;
}
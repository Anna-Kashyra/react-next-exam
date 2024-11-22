export const baseUrl: string = 'https://api.themoviedb.org/3';

export const baseImgUrl: string = 'https://image.tmdb.org/t/p/';

export const moviesUrl = {
    allMoviesUrl: '/discover/movie',
    popularMoviesUrl: '/movie/popular',
    topRatedMoviesUrl: '/movie/top_rated',
    upcomingMoviesUrl: '/movie/upcoming',
}

export const showsUrl = {
    allShowsUrl: '/discover/tv',
}

export const genresUrl = {
    movieGenresUrl: '/genre/movie/list',
    showGenresUrl: '/genre/tv/list',
}

export const urlBuilder = {
    allMovies: (page: number) => `${baseUrl}${moviesUrl.allMoviesUrl}?page=${page}`,
    popularMovies: () => baseUrl + moviesUrl.popularMoviesUrl,
    topRatedMovies: () => baseUrl + moviesUrl.topRatedMoviesUrl,
    upcomingMovies: () => baseUrl + moviesUrl.upcomingMoviesUrl,

    allShows: (page: number) => `${baseUrl}${showsUrl.allShowsUrl}?page=${page}`,

    movieGenres: () => baseUrl + genresUrl.movieGenresUrl,
    showGenres: () => baseUrl + genresUrl.showGenresUrl,

    moviesByGenre: (genreId: string) => `${baseUrl}/discover/movie?with_genres=${genreId}`,
    showsByGenre: (genreId: string) => `${baseUrl}/discover/tv?with_genres=${genreId}`,

    search: (query: string) => `${baseUrl}/search/multi?query=${encodeURIComponent(query)}`,

    movieById: (id: string) => `${baseUrl}/movie/${id}`,
    showById: (id: string) => `${baseUrl}/tv/${id}`
}



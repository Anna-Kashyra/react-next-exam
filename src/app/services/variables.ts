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
    allMovies: () => baseUrl + moviesUrl.allMoviesUrl,
    popularMovies: () => baseUrl + moviesUrl.popularMoviesUrl,
    topRatedMovies: () => baseUrl + moviesUrl.topRatedMoviesUrl,
    upcomingMovies: () => baseUrl + moviesUrl.upcomingMoviesUrl,

    allShows: () => baseUrl + showsUrl.allShowsUrl,

    movieGenres: () => baseUrl + genresUrl.movieGenresUrl,
    showGenres: () => baseUrl + genresUrl.showGenresUrl,

    moviesByGenre: (genreId: string) => `${baseUrl}/discover/movie?with_genres=${genreId}`,
    showsByGenre: (genreId: string) => `${baseUrl}/discover/tv?with_genres=${genreId}`,

    search: (query: string) => `${baseUrl}/search/multi?query=${encodeURIComponent(query)}`,
}

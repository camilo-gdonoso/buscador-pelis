import responseMovies from '../mocks/results.json'
import withoutResults from '../mocks/no-results.json'

export function useMovies () {
    const movies = responseMovies.Search
  
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.title,
      year: movie.Year,
      poster: movie.Poster
    }))
    return { movies: mappedMovies }
  }
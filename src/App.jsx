import './App.css'
import responseMovies from './mocks/results.json'
import withoutResults from './mocks/no-results.json'
import { Movies } from './components/Movies'

function App() {
  const movies = responseMovies.Search
  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input placeholder='Matrix, Starwars, Avengers...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App

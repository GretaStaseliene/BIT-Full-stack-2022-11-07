import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const API_URL = 'https://omdbapi.com/?apikey=2e9b1f46&page=';
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState();

  useEffect(() => {
    if (!search) return;

    setLoading(true);
    setMovies([]);

    fetch(API_URL + page + '&s=' + search)
      .then(resp => resp.json())
      .then(resp => {
        setLoading(false);

        if (resp.Response === 'False') return;

        setMovies(resp.Search)
        setTotal(Math.ceil(resp.totalResults / 10));
      });

  }, [page, search]);

  const nextPage = () => {
    if (page < total)
      setPage(page + 1);
  }

  const previousPage = () => {
    if (page > 1)
      setPage(page - 1);
  }

  return (
    <>
      {/* {loading ?
        <div className="loading">Kraunasi....</div>
        :
        <div></div>
      } */}
      {loading && <div className="loading">Kraunasi....</div>}
      <div className="container">
        <h1 className="mb-3 mt-3">Filmų duomenų bazė</h1>

        <input type="text" className="form-control" onChange={(e) => setSearch(e.target.value)} />

        {movies.length > 0 &&
          <>
            <div className="row movies">
              {movies.map(movie =>
                <div className="col-4 movie" key={movie.imdbID}>
                  <img src={movie.Poster} alt={movie.Title} />
                  <h3>{movie.Title}</h3>
                  <div className="d-flex justify-content-between info">
                    <span>{movie.Year}</span>
                    <span>{movie.Type}</span>
                  </div>
                </div>
              )}
            </div>
            <ul className="pagination justify-content-center">
              <li className={page == 1 ? 'page-item disabled' : 'page-item'}>
                <a
                  href="#"
                  className="page-link"
                  onClick={previousPage}
                >Ankstesnis</a>
              </li>
              <li className="page-item">
                <span>{page}</span>
              </li>
              <li className={page == total ? 'page-item disabled' : 'page-item'}>
                <a
                  href="#"
                  className="page-link"
                  onClick={nextPage}
                >Sekantis</a>
              </li>
            </ul>
          </>
        }
      </div>
    </>
  );
}

export default App;
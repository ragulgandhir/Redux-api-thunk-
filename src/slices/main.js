import React, { useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux' 
import { filmsSelector, fetchFilms } from './films'

function Main() {
  const dispatch = useDispatch()
  const { films, loading, hasErrors } = useSelector(filmsSelector)

  useEffect(() => {
   dispatch(fetchFilms())
  }, [dispatch])

  function renderFilms() {
    if (loading)
      return <p>Loading data...</p>
    if (hasErrors)
      return <p>Cannot display data...</p>

    return films.map(film => 
      <div key={film.id}>
      <img className="imgStyle" src={film.image} alt=''/>
      <h2>Title: {film.title}</h2>
      <h3>Original_Title: {film.original_title}</h3>
      <h4>Director : {film.director}</h4>
      <h5>Release_Date : {film.release_date}</h5>
      <h6>Playtime : {film.running_time}</h6>
    </div>
    )
  }

  console.log('Films: ', films);
  return (
    <div>
      <h1>Redux Api Fetch</h1>
      {renderFilms()}
    </div>
  );
}

export default Main;

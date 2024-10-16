import React, { useState } from 'react';
import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import { movies } from './sahteVeri.js';
import { Switch, Route } from 'react-router-dom';
import Film from './components/Film';
import FilmListesi from './components/FilmListesi';

export default function App() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [filmler, setFilmler] = useState(movies);

  const KaydedilenlerListesineEkle = (movie) => {
    if (!savedMovies.find((item) => item.id === movie.id)) {
      setSavedMovies([...savedMovies, movie]);
    }
  };

  return (
    <div>
      <KaydedilenlerListesi list={savedMovies} />
      <Switch>
        <Route exact path="/">
          <FilmListesi movies={filmler} />
        </Route>
        <Route path="/filmler/:id">
          <Film KaydedilenlerListesineEkle={KaydedilenlerListesineEkle} />
        </Route>
      </Switch>
    </div>
  );
}
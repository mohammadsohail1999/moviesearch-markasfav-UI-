import Header from "./Components/Layouts/Header";
import "./styles/app.scss";
import Search from "./Components/Layouts/Search";
import SearchContext from "./context/searchMovieContext/searchContext";
import { useContext, useEffect } from "react";
import Card from "./Components/card";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Favorites from "./Components/Layouts/Favorites";
import Modal from "./Components/Layouts/Modal";

function App() {
  const searchContaxt = useContext(SearchContext);

  const { movies,searchMovie } = searchContaxt;


  useEffect(()=>{

    searchMovie('batman');

  },[]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Modal/>        
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <Search />
              {movies && movies !== null ? (
                <div className="grid">
                  {movies.map((movie) => {
                    return (
                      <Card
                        movie={movie}
                        key={movie.imdbID}
                        id={movie.imdbID}
                        img={movie.Poster}
                        title={movie.Title}
                      />
                    );
                  })}
                </div>
              ) : (
                <>
                  <h1 className="message">Search for A Movie</h1>
                </>
              )}
            </Route>
            <Route path="/fav" exact component={Favorites} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

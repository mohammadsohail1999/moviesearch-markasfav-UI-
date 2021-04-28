import React, { useContext } from "react";
import SearchContext from "../../context/searchMovieContext/searchContext";
import Card from "../card";

const Favorites = () => {
  const searchContext = useContext(SearchContext);

  const { favorites, clearfav } = searchContext;

  return (
    <>
      {favorites && favorites.length > 0 && (
        <div className="clear">
          <button className="clear_btn" onClick={(e) => clearfav()}>
            Clear All
          </button>
        </div>
      )}

      {favorites && favorites.length > 0 ? (
        <div className="grid fav_grid">
          {favorites.map((fav) => {
            return <Card img={fav.Poster} title={fav.Title} id={fav.imdbID} movie={fav}/>;
          })}
        </div>
      ) : (
        <h1 className="message">No Favorites!</h1>
      )}
    </>
  );
};

export default Favorites;

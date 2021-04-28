import React, { useContext, useRef } from "react";
import SearchContext from "../context/searchMovieContext/searchContext";
import { useLocation } from "react-router-dom";

const Card = ({ img, title, id, movie }) => {
  const searchContext = useContext(SearchContext);

  const { searchMovieDetail, addtoFavorites,deleteFav } = searchContext;

  const { pathname } = useLocation();

  const heart = useRef();

  return (
    <>
      <div className="card">
        <div className="card_img">
          <img src={img} alt={title} />

          <div className="more">
            <button onClick={(e) =>{


const modal = document.querySelector('.modal');
modal.classList.add('visible');
const body = document.body;
 body.classList.add('active');








              searchMovieDetail(id)
            } } className="more_btn">
              <i className="fas fa-info-circle"></i>
            </button>

            {pathname === "/fav" ? (
              <button onClick={e => deleteFav(id)} className="more_btn">
                <i className="far fa-trash-alt"></i>
              </button>
            ) : (
              <button
                onClick={(e) => {
                  heart.current.classList.replace("fa-heart", "fa-check");
                  addtoFavorites(movie);
                }}
                className="more_btn"
              >
                <i ref={heart} className="fas fa-heart"></i>
              </button>
            )}
          </div>
        </div>
        <div className="card_header">
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
};

export default Card;

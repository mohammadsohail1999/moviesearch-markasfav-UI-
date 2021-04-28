import React, { useContext } from "react";
import SearchContext from "../../context/searchMovieContext/searchContext";

const Modal = () => {
  const searchContext = useContext(SearchContext);

  const { movie,clearMovieDetail} = searchContext;

  const modal = document.querySelector('.modal')

  window.addEventListener('click',(e)=>{

    if(e.target === modal){
      modal.classList.remove('visible');
      document.body.classList.remove('active');

      clearMovieDetail();

    }

  })

  return (
    <div className="modal">
      {movie !== null && (
        <div className="modal_c">
          <img src={movie.Poster} alt="" />
            <div className="modal_title">
              <h1>{movie.Title}</h1>
            </div>
            <div onClick={()=>{
              const modal = document.querySelector('.modal');
              modal.classList.remove('visible');
              const body = document.body;
              body.classList.remove('active');
              clearMovieDetail();
              
            }} className="modal_close">
              X
            </div>
          <div className="modal_des">
            
            <div className="modal_des_detail">

                <div className="modal_des_detail_item">
                  <p>Cast:</p>
                <p>{movie.Actors}</p>
           

                </div>
                <div className="modal_des_detail_item">
                  <p>Plot:</p>
                <p>{movie.Plot}</p>
           
                </div>
{/* 
<div className="modal_btn_wrapper">
  <button className="modal_btn">Mark as Favorite</button>
</div> */}
                
               
              
            </div>
            
           
            {/* <div className="modal_des_detail">
              <h1>{movie.Title}</h1>
            </div>
            <div className="modal_des_detail">
              <h1>{movie.Title}</h1>
            </div>
            <div className="modal_des_detail">
              <h1>{movie.Title}</h1>
            </div> */}
              
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

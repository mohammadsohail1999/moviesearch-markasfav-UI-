import React,{useReducer} from 'react'
import searchReducer from './searchreducer';
import axios from 'axios';
import SearchContext from './searchContext';

const SearchState = ({children}) => {


    const fav = localStorage.getItem('fav') ? JSON.parse(localStorage.getItem('fav')) : []

    const initialState = {
        movies: null,
        movie: null,
        error: null,
        loading: false,
        favorites: fav 

    }


    const [state,dispatch] = useReducer(searchReducer,initialState);



    console.log(state);

 // search for a movie 


    const searchMovie = async (term)=>{


        try {
            
        const res = await axios.get('https://www.omdbapi.com/',{
            params:{
                apikey: 'd9835cc5',
                s: term
            }
        })


          dispatch({type:'MOVIE_RES',payload: res.data.Search});


        } catch (error) {
           console.log(error); 
        }



    }

    const searchMovieDetail = async (id)=>{


        try {
            
        const res = await axios.get('https://www.omdbapi.com/',{
            params:{
                apikey: 'd9835cc5',
                i: id
            }
        })




      

      dispatch({type:'MOVIEDETAIL_RES',payload: res.data});


        } catch (error) {
           console.log(error); 
        }



    }


    //clear movie detail 


   const clearMovieDetail = ()=>{
       dispatch({type:"CLEAR_MOVIEDETAIL"})
   }


    const addtoFavorites = (movie)=>{


        dispatch({type:"FAVORITES", payload: movie})

    }


    const deleteFav = (id)=>{

        dispatch({type:"DELETE_FAV", payload: id})


    }

    const clearfav = ()=>{

        localStorage.removeItem('fav');

        dispatch({type:"CLEARALL_FAV"})


    }


  


    



    return (
        <SearchContext.Provider value={{
            movies: state.movies,
            movie: state.movie,
            favorites: state.favorites,
            searchMovie,
            searchMovieDetail,
            addtoFavorites,
            clearfav,
            deleteFav,
            clearMovieDetail

            
        }}>
           {children} 
        </SearchContext.Provider>
    )
}

export default SearchState

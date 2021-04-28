import React,{useState,useContext} from 'react'
import SearchContext from '../../context/searchMovieContext/searchContext';

const Search = () => {

    const searchContext = useContext(SearchContext);

 
    const {searchMovie} = searchContext;
   
    const [search,SetSearch] = useState('');


    const onSubmit = (e)=>{

        e.preventDefault();

        
        searchMovie(search);

        SetSearch('');

    }
    
    const onChange = (e)=>{

        SetSearch(e.target.value);

    }

    return (
        <>
          <form onSubmit={onSubmit}>
              <input value={search} onChange={onChange} type="text" placeholder="Search a Movie..."/>
              <button className="btn">
                  Search
              </button>
          </form>
        </>
    )
}

export default Search

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "MOVIE_RES":
      return {
        ...state,
        movies: action.payload,
      };

    case "MOVIEDETAIL_RES":
      return {
        ...state,
        movie: action.payload,
      };

      case "CLEAR_MOVIEDETAIL":
        return {
          ...state,
          movie: null
        };

    case "FAVORITES":
      if (state.favorites) {
        let matched = state.favorites.filter(
          (fav) => fav.imdbID === action.payload.imdbID
        );

        if (matched.length > 0) {
          localStorage.setItem("fav", JSON.stringify([...state.favorites]));

          return {
            ...state,
            favorites: [...state.favorites],
          };
        }

        if (matched.length === 0) {
          localStorage.setItem(
            "fav",
            JSON.stringify([...state.favorites, action.payload])
          );

          return {
            ...state,
            favorites: [...state.favorites, action.payload],
          };
        }
      }

    // eslint-disable-next-line no-fallthrough
    case "DELETE_FAV":

    localStorage.setItem('fav',JSON.stringify(state.favorites.filter(fav => fav.imdbID !== action.payload)))

      return {
        ...state,
        favorites : state.favorites.filter(fav => fav.imdbID !== action.payload)
      };

    // eslint-disable-next-line no-fallthrough
    case "CLEARALL_FAV":
      return {
        ...state,
        favorites: [],
      };

    default:
      return state;
  }
};

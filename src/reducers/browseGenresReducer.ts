// src/reducers/browseGenresReducer.ts
const initialState = {
    loading: true,
    genres: [],
    error: '',
  };
  
  const browseGenresReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'FETCH_BROWSE_GENRES_REQUEST':
        return {
          ...state,
          loading: true,
          error: '',
        };
      case 'FETCH_BROWSE_GENRES_SUCCESS':
        return {
          ...state,
          loading: false,
          genres: action.payload,
        };
      case 'FETCH_BROWSE_GENRES_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default browseGenresReducer;
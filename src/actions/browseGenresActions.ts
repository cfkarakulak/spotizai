// src/actions/browseGenresActions.ts
import { Dispatch } from 'redux';
import { getGenres } from '../spotifyAPI';
import { AppThunk } from '../store';

export const fetchBrowseGenres = (): AppThunk => {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'FETCH_BROWSE_GENRES_REQUEST' });
    getGenres()
      .then((data) => {
        dispatch({
          type: 'FETCH_BROWSE_GENRES_SUCCESS',
          payload: data.categories.items,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_BROWSE_GENRES_FAILURE',
          payload: 'Error fetching browse genres.',
        });
      });
  };
};
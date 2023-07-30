// src/components/BrowseGenres.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchBrowseGenres } from '../actions/browseGenresActions';
import { RootState } from '../store';

const BrowseGenres: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
  const { loading, genres, error } = useSelector(
    (state: RootState) => state.browseGenres
  );

  useEffect(() => {
    dispatch(fetchBrowseGenres());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Browse Genres</h2>
      {genres.map((genre: any) => (
        <div key={genre.id}>{genre.name}</div>
      ))}
    </div>
  );
};

export default BrowseGenres;
// src/App.tsx
import React from 'react';
import ReleasedThisWeek from './components/ReleasedThisWeek';
import FeaturedPlaylists from './components/FeaturedPlaylists';
import BrowseGenres from './components/BrowseGenres';

function App() {
  return (
    <div>
      <ReleasedThisWeek />
      <FeaturedPlaylists />
      <BrowseGenres />
    </div>
  );
}

export default App;
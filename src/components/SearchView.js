import React from "react";

function SearchView({ keyword, searchResults }) {
  return (
    <div>
      <h2>Search Results for "{keyword}"</h2>
      <ul>
        {searchResults.map((result) => (
          <li key={result.show.id}>{result.show.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchView;

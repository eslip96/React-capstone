import React from "react";

const SearchView = ({ keyword, searchResults }) => {
  return (
    <div>
      <h2>Search results for "{keyword}"</h2>
      <ul>
        {searchResults.map((result) => (
          <li key={result.show.id}>
            <img src={result.show.image?.medium} alt={result.show.name} />
            <h3>{result.show.name}</h3>
            <p>{result.show.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchView;

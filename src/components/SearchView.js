import React from "react";

const SearchView = ({ keyword, searchResults }) => {
  return (
    <div className="card">
      <h2>Search results for "{keyword}"</h2>
      <div
        className="card-content"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {searchResults.map((result) => (
          <div key={result.show.id} style={{ width: "300px", margin: "10px" }}>
            <img
              src={result.show.image?.medium}
              alt={result.show.name}
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <h3>{result.show.name}</h3>
            <p>{result.show.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchView;

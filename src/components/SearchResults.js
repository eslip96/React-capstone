import React from "react";

const SearchView = ({ keyword, searchResults }) => {
  return (
    <div>
      <h2>Search results for "{keyword}"</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {searchResults.map((result) => (
          <div key={result.show.id} style={{ width: "300px", margin: "10px" }}>
            <div className="card">
              <img
                src={result.show.image?.medium}
                alt={result.show.name}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div className="card-content">
                <h3>{result.show.name}</h3>
                <p>{result.show.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchView;

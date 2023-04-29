import React, { useState } from "react";

const SearchView = ({ keyword, searchResults }) => {
  const [expandedShowId, setExpandedShowId] = useState(null);

  const toggleExpanded = (showId) => {
    setExpandedShowId(showId === expandedShowId ? null : showId);
  };

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
                {expandedShowId === result.show.id ? (
                  <div>
                    <p>{result.show.summary}</p>
                    <button onClick={() => toggleExpanded(result.show.id)}>
                      Hide
                    </button>
                  </div>
                ) : (
                  <button onClick={() => toggleExpanded(result.show.id)}>
                    Show More
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchView;

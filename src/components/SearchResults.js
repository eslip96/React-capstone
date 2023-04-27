import React from "react";

function SearchResults(results) {
  return results.map((result) => {
    return (
      <div key={result.show.id}>
        <h3>{result.show.name}</h3>
        <p dangerouslySetInnerHTML={{ __html: result.show.summary }}></p>
        {result.show.image && (
          <img src={result.show.image.medium} alt={result.show.name} />
        )}
      </div>
    );
  });
}

export default SearchResults;

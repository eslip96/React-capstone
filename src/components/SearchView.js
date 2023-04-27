import React from "react";
import Hero from "./Hero";
import SearchResults from "./SearchResults";

function SearchView({ keyword, searchResults }) {
  const title = `You are searching for ${keyword}`;
  console.log(searchResults, "are the search results");
  return (
    <div>
      <Hero text={title} />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default SearchView;

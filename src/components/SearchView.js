import Hero from "./Hero";

// API KEY= PgrKgO3nsvrugD8Zx4eCceZNB_PQdK9K
// Ex. link = https://api.tvmaze.com/v1/user/episodes?show_id=PgrKgO3nsvrugD8Zx4eCceZNB_PQdK9K

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  console.log(searchResults, "are the search results");
  return (
    <div>
      <Hero text={title} />
    </div>
  );
};

export default SearchView;

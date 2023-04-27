import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import { Route, Switch } from "react-router-dom";
// import { useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log(searchText, "is the search text");
    fetch(`https://api.tvmaze.com/show/${searchText}`)
      .then((Response) => Response.json)
      .then((data) => {
        console.log(data);
      });
  }, [searchText]);

  return (
    <div>
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

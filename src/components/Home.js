import { useState, useEffect } from "react";
import Hero from "./Hero";

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/top-20-shows")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div>
      <Hero text="Welcome to Notflix" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <div className="card">
              <div className="card-body">
                <p className="card-text lead">
                  Notflix is a new streaming service that focuses solely on TV
                  shows, offering a vast selection of titles to binge-watch.
                  With its intuitive interface and competitive pricing, Notflix
                  aims to become a top player in the TV streaming market. From
                  the latest releases to timeless classics, Notflix has an
                  impressive range of shows for viewers to explore.
                </p>
              </div>
            </div>
            <ul>
              {shows.map((show) => (
                <li key={show.id}>
                  <h2>{show.title}</h2>
                  <p>{show.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

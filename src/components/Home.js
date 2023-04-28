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
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ipsum vitae voluptatem voluptate ullam quos ipsa
              impedit, similique nisi sunt veritatis delectus recusandae dolor,
              necessitatibus a perspiciatis ea neque iure!
            </p>
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

import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero text="Welcome to Notflix" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ipsum vitae voluptatem voluptate ullam quos ipsa
              impedit, similique nisi sunt veritatis delectus recusandae dolor,
              necessitatibus a perspiciatis ea neque iure!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

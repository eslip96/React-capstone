import Hero from "./Hero";

const AboutView = () => {
  return (
    <div>
      <Hero text="About Us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              My ultimate goal is to become a proficient developer and secure a
              job in the music industry where I can make a valuable
              contribution. During my time at DevPipeline, I've been humbled by
              the complexity of coding, which I used to think was beyond my
              grasp. However, I've come a long way since I first started a year
              ago and feel like I've learned a lot. I've built several projects
              throughout my journey, but my favorite language so far has to be
              React. I love how its component-based structure allows for easy
              reusability, and how it ties together all the front-end
              development skills I've acquired so far. Anytime I can use
              existing components and avoid writing new code is a huge plus for
              me!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;

const Hero = (props) => {
  return (
    <header className="bg-dark text-white p-5">
      <h1 style={{ fontFamily: "Quicksand" }}>{props.text}</h1>
    </header>
  );
};

export default Hero;

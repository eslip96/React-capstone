const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer>{`Copyright © Notflix ${year}`}</footer>
    </div>
  );
};

export default Footer;

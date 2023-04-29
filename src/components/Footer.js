import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer>
        <ul>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <p>&copy; Notflix {year}</p>
      </footer>
    </div>
  );
};

export default Footer;

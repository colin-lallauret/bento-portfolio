import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <Link to="/mentions-legales" className="">
          Mentions légales
        </Link>
        <Link to="/politique-de-confidentialite" className="">
          Politique de confidentialité
        </Link>
      </footer>
    </>
  );
};

export default Footer;

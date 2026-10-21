import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../../i18n";
const Footer = () => {
  const { t } = useLang();
  return (
    <>
      <footer>
        <Link to="/mentions-legales" className="">
          {t("Mentions légales", "Legal notice")}
        </Link>
        <Link to="/politique-de-confidentialite" className="">
          {t("Politique de confidentialité", "Privacy policy")}
        </Link>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import FooterNav from "components/FooterNav";
import CreditsAndCopyright from "components/CreditsAndCopyright";

function Footer() {
  return (
    <footer className="text-white font-serif">
      <FooterNav />
      <CreditsAndCopyright />
    </footer>
  );
}

export default Footer;

import React from "react";
import FooterNav from "components/FooterNav";
import CreditsAndCopyright from "components/CreditsAndCopyright";

function Footer() {
  return (
    <div className=" text-white font-serif">
      <FooterNav />
      <CreditsAndCopyright />
    </div>
  );
}

export default Footer;

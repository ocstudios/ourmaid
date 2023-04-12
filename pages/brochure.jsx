import DomesticServices from "@/components/Brochure/DomesticServices";
import FranchiseBrochure from "@/components/Brochure/FranchiseBrochure";
import Main from "@/components/Brochure/Main";
import OurServices from "@/components/Brochure/OurServices";
import React from "react";

const Brochure = () => {
  return (
    <>
      <Main />
      <FranchiseBrochure />
      <DomesticServices />
      <OurServices />
    </>
  );
};

export default Brochure;

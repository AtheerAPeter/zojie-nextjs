import Navul from "../components/navul";
import Hamburger from "../components/hamburger";
import React, { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="nav-content">
        <img src="/assets/logo.svg" alt="" />
        <Hamburger open={open} setOpen={setOpen} />
        <Navul classOpen={open} />
      </div>
    </>
  );
};

export default Nav;

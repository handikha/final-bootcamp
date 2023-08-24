import React from "react";
import LogoIcon from "../../assets/logoIcon.png";

export default function NavBrand() {
  return (
    <a href="/" className="flex items-center gap-2">
      <img src={LogoIcon} alt="" className="w-8" />
      <h3 className="text-2xl font-bold tracking-tighter text-dark">
        Healthymed
      </h3>
    </a>
  );
}

import { FaArrowRightFromBracket } from "react-icons/fa6";
import Button from "../Button";
import NavBrand from "./nav.brand";
import { useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiMiniBars3,
  HiXMark,
} from "react-icons/hi2";

export default function AdminNav({
  user,
  isLogin,
  setIsLogin,
  isSidebarActive,
  setIsSidebarActive,
}) {
  return (
    <div className="nav h-18">
      <div className="navbar container">
        <div className="flex w-full items-center justify-between">
          <NavBrand />

          <div
            className={`select-none ${
              isSidebarActive ? "left-1" : "left-1/2"
            }  top-20 ml-1 cursor-pointer rounded-lg border  p-2 duration-300 lg:left-20 lg:hidden`}
            onClick={() => setIsSidebarActive(!isSidebarActive)}
          >
            {isSidebarActive ? (
              <HiXMark className="text-xl" />
            ) : (
              <HiMiniBars3 className="text-xl" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

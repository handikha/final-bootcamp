import { useEffect } from "react";
import Button from "../Button";

import { FaCartShopping } from "react-icons/fa6";
import NavMenuItems from "./nav.menu.items";

import cart from "../../json/cart.json";

export default function NavMenu({
  isLogin,
  setIsLogin,
  user,
  handleShowModal,
}) {
  return (
    <>
      <div
        className={`nav-menu mr-8 w-full ${
          isLogin && "mr-8 w-full border-primary/70 pr-8 lg:border-r-[1px] "
        }`}
      >
        {!isLogin ? (
          <div className="flex w-full gap-4 lg:w-fit">
            <Button
              isButton
              isPrimaryOutline
              title="Masuk"
              className="w-full"
              onClick={() => handleShowModal("login")}
            />
            <Button
              isButton
              isPrimary
              title="Daftar"
              className="w-full"
              onClick={() => handleShowModal("register")}
            />
          </div>
        ) : (
          <NavMenuItems user={user} />
        )}
      </div>

      <div className={`flex items-center gap-4 md:gap-8`}>
        {isLogin && (
          <>
            <div className="relative">
              <Button isLink>
                <FaCartShopping className="fill-primary text-2xl" />
                <span className="absolute -right-2 -top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-danger text-[10px] text-white">
                  {cart.length}
                </span>
              </Button>
            </div>

            <Button
              isLink
              className="text-dark duration-300 hover:text-primary"
            >
              <div className="profile-img-wrapper relative row-start-2 flex w-full items-center gap-2">
                <div
                  className={`nav-profile-img hidden aspect-square w-8 cursor-pointer self-center overflow-hidden rounded-full bg-primary md:mb-0 lg:block`}
                >
                  <img
                    src={
                      process.env.REACT_APP_IMAGE_URL +
                      user?.profile.profilePicture
                    }
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Button>
          </>
        )}
      </div>
    </>
  );
}

import Button from "../Button";
import { AnimatePresence, motion } from "framer-motion";
import { FaCartShopping } from "react-icons/fa6";
import UserNavMenuItems from "./user.nav.menu.items";

import cart from "../../json/cart.json";
import { useState } from "react";
import { HiChevronRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function NavMenu({
  isLogin,
  setIsLogin,
  user,
  handleShowModal,
}) {
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleProfileHover = (type) => {
    if (type === "hover") {
      setIsMenuVisible(true);
    }

    if (type === "leave") {
      setIsMenuVisible(false);
    }
  };
  return (
    <>
      <div
        className={`nav-menu mr-8 w-full ${
          isLogin && "border-primary/70 pr-8 lg:border-r-[1px] "
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
          <UserNavMenuItems user={user} />
        )}
      </div>

      <div className={`flex items-center gap-4 md:gap-8`}>
        {isLogin && (
          <>
            <div className="relative">
              <Button isLink path="/cart">
                <FaCartShopping className="fill-primary text-2xl" />
                <span className="absolute -right-2 -top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-danger text-[10px] text-white">
                  {cart.length}
                </span>
              </Button>
            </div>

            <div
              className="profile-img-wrapper relative row-start-2 flex w-full items-center gap-2"
              onMouseOver={() => handleProfileHover("hover")}
              onMouseLeave={() => handleProfileHover("leave")}
              onClick={() => navigate("/profile")}
            >
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

              <AnimatePresence>
                {isMenuVisible && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0,
                      originY: 0,
                      originX: 1,
                    }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      originY: 0,
                      originX: 1,
                    }}
                    className="absolute right-0 top-full pt-2"
                  >
                    <div className="rounded-lg border bg-slate-100 px-6 py-4 shadow-lg">
                      <div className="" onClick={() => navigate("/profile")}>
                        <div className="flex w-72 cursor-pointer items-center gap-2 border-b-2 pb-4">
                          <div className="h-12 w-12 overflow-hidden rounded-full">
                            <img
                              src={
                                process.env.REACT_APP_IMAGE_URL +
                                user?.profile.profilePicture
                              }
                              alt=""
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="">
                            <h3>{user.profile.name}</h3>
                            <p className="text-sm font-normal text-slate-500">
                              Cek Profil
                            </p>
                          </div>
                          <div className="ml-auto flex h-8 w-8 items-center justify-center rounded-full shadow-md">
                            <HiChevronRight className="text-dark" />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 pt-4">
                        <Button
                          isLink
                          title="Pengaturan"
                          className="hover:text-primary"
                        />
                        <Button
                          isLink
                          title="Keluar"
                          className="hover:text-primary"
                          onClick={() => {
                            setIsLogin(false);
                            handleProfileHover("leave");
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        )}
      </div>
    </>
  );
}

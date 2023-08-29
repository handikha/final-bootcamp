import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";
import UploadRecipeButton from "../UploadRecipeButton";
import Modal from "../Modal";
import NavBrand from "./nav.brand";
import NavMenu from "./nav.menu";
import LogoIcon from "../../assets/logoIcon.png";
import Button from "../Button";
import Input from "../Input";
import { useLocation } from "react-router-dom";

export default function Navbar({ user, isLogin, setIsLogin }) {
  const { pathname } = useLocation();
  // SEARCH HANDLER
  const searchRef = useRef(null);
  const handleSearch = (event) => {
    event.preventDefault();
  };

  const resetSearch = () => {
    searchRef.current.value = "";
  };

  const [isScrolled, setIsScrolled] = useState(false);
  // SCROLL AND RESIZE HANDLER
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsScrolled]);

  // MODAL HANDLER
  const [showModal, setShowModal] = useState({ show: false, context: "" });
  
  const handleShowModal = (context) => {
    setShowModal({ show: true, context });

    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setShowModal({ show: false, context: "" });

    document.body.style.overflow = "auto";
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ translateY: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          animate={{ translateY: 0, opacity: 1 }}
          className={`nav`}
        >
          <div className="navbar container">
            <div className="hidden lg:block">
              <NavBrand />
            </div>

            <div className="block lg:hidden">
              <a href="/">
                <img src={LogoIcon} alt="" className="w-10" />
              </a>
            </div>

            <form className="relative flex-grow" onSubmit={handleSearch}>
              <input
                ref={searchRef}
                type="text"
                placeholder="Cari Kebutuhanmu Disini"
                className="w-full rounded-lg border border-slate-400 bg-transparent px-5 py-2 text-sm font-light outline-none focus:border-primary focus:ring-2 focus:ring-primary/40"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 cursor-pointer px-5 py-2 text-slate-400 duration-300 hover:text-primary sm:text-sm"
              >
                {searchRef.current?.value ? (
                  <HiXMark className="text-xl " onClick={resetSearch} />
                ) : (
                  <HiMagnifyingGlass className="text-xl " />
                )}
              </button>
            </form>

            <div
              className={`nav-menu-wrapper justify-between ${
                isLogin && "lg:w-1/3"
              }`}
            >
              <NavMenu
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                handleShowModal={handleShowModal}
                setIsScrolled={setIsScrolled}
                user={user}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <Modal
        showModal={showModal.show}
        closeModal={handleCloseModal}
        title={
          showModal.context === "login"
            ? "Login"
            : showModal.context === "register"
            ? "Register"
            : "Lupa Password"
        }
      >
        {showModal.context === "login" ? (
          <>
            <span className="mr-2 text-slate-600">Belum punya akun?</span>
            <Button
              isLink
              title="Daftar"
              className="text-primary underline"
              onClick={() => handleShowModal("register")}
            />
            <form className="mt-8 flex flex-col gap-4">
              <Input
                type="text"
                label="Email"
                placeholder="example@email.com"
              />

              <>
                <Input
                  type="password"
                  label="Password"
                  placeholder="··············"
                />

                <Button
                  isLink
                  title="Lupa password?"
                  className="w-fit text-sm text-primary hover:underline"
                  onClick={() => handleShowModal("forgot-password")}
                />
              </>

              <Button
                isButton
                isPrimary
                type="submit"
                title="Masuk"
                className="mt-4 py-3"
                onClick={() => {
                  setIsLogin(true);
                  handleCloseModal();
                }}
              />
            </form>
          </>
        ) : showModal.context === "register" ? (
          <>
            <span className="mr-2 text-slate-600">Sudah punya akun?</span>
            <Button
              isLink
              title="Masuk"
              className="text-primary underline"
              onClick={() => handleShowModal("login")}
            />
            <form className="mt-8 flex flex-col gap-4">
              <Input
                type="text"
                label="Email"
                placeholder="example@email.com"
              />

              <Input
                type="password"
                label="Password"
                placeholder="··············"
              />

              <Input
                type="password"
                label="Re Type Password"
                placeholder="··············"
              />

              <Button
                isButton
                isPrimary
                type="submit"
                title="Daftar"
                className="mt-4 py-3"
              />
            </form>
          </>
        ) : (
          <>
            <span className="mr-2 text-slate-600">
              Kami akan mengirimkan email untuk mengubah password kamu
            </span>
            <form className="mt-4 flex flex-col gap-4">
              <Input
                type="text"
                label="Email"
                placeholder="example@email.com"
              />

              <Button
                isButton
                isPrimary
                type="submit"
                title="Send"
                className="mt-4 py-3"
              />
            </form>
          </>
        )}
      </Modal>

      {pathname === "/" && (
        <UploadRecipeButton
          className={isScrolled ? "translate-y-0" : "translate-y-[250%]"}
        />
      )}
    </>
  );
}

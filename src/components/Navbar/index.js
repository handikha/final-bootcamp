import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";
import ToTop from "../ToTop";
import Modal from "../Modal";
import NavBrand from "./nav.brand";
import NavMenu from "./nav.menu";
import LogoIcon from "../../assets/logoIcon.png";
import Button from "../Button";
import Input from "../Input";

export default function Navbar({ user }) {
  // SEARCH HANDLER
  const searchRef = useRef(null);
  const handleSearch = (event) => {
    event.preventDefault();
  };

  const resetSearch = () => {
    searchRef.current.value = "";
  };

  // LOGIN HANDLER
  const [isLogin, setIsLogin] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);

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
                <img src={LogoIcon} alt="" className="w-14" />
              </a>
            </div>

            <form className="relative w-full lg:w-3/5" onSubmit={handleSearch}>
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

            <div className="nav-menu-wrapper">
              <NavMenu
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                handleShowModal={handleShowModal}
                setIsScrolled={setIsScrolled}
                setIsNavActive={setIsNavActive}
                isNavActive={isNavActive}
                user={user}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <ToTop
        className={
          isScrolled && !isNavActive ? "translate-y-0" : "translate-y-[250%]"
        }
      />

      <Modal
        showModal={showModal.show}
        closeModal={handleCloseModal}
        title={showModal.context === "login" ? "Login" : "Register"}
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
                />
              </>

              <Button
                isButton
                isPrimary
                type="submit"
                title="Masuk"
                className="mt-4 py-3"
              />
            </form>
          </>
        ) : (
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
        )}
      </Modal>
    </>
  );
}

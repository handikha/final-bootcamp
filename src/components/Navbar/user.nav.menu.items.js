import { useLocation } from "react-router-dom";
import Button from "../Button";

import { HiDocumentText, HiHome, HiMiniSquares2X2 } from "react-icons/hi2";
import { BiSolidDiscount } from "react-icons/bi";

export default function NavMenuItems({ user }) {
  const { pathname } = useLocation();
  return (
    <div className="flex w-full items-center justify-between">
      <Button
        isLink
        path="/"
        className={`flex flex-col items-center gap-1 text-xs ${
          pathname === "/" ? "text-primary" : "text-slate-500"
        } `}
      >
        <HiHome className="text-2xl" />
        <span>Beranda</span>
      </Button>

      <Button
        isLink
        path="/products"
        className={`flex flex-col items-center gap-1 text-xs ${
          pathname === "/products" ? "text-primary" : "text-slate-500"
        }`}
      >
        <HiMiniSquares2X2 className="text-2xl" />
        <span>Produk</span>
      </Button>

      <Button
        isLink
        path="/upload-recipe"
        className={`flex flex-col items-center gap-1 text-xs lg:hidden ${
          pathname === "/upload-recipe" ? "text-primary" : "text-slate-500"
        }`}
      >
        <HiDocumentText className="text-2xl" />
        <span>Unggah Resep</span>
      </Button>

      <Button
        className={`flex flex-col items-center gap-1 text-xs ${
          pathname === "/help" ? "text-primary" : "text-slate-500"
        }`}
      >
        <BiSolidDiscount className="text-2xl" />
        <span>Promo</span>
      </Button>

      <Button
        isLink
        path="/profile"
        className={`flex flex-col items-center gap-1 text-xs lg:hidden ${
          pathname === "/profile" ? "text-primary" : "text-slate-500"
        }`}
      >
        <div className="profile-img-wrapper ">
          <div
            className={`nav-profile-img aspect-square w-7 cursor-pointer self-center overflow-hidden rounded-full bg-primary md:mb-0 `}
          >
            <img
              src={
                process.env.REACT_APP_IMAGE_URL + user?.profile.profilePicture
              }
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <span>Profil</span>
      </Button>
    </div>
  );
}

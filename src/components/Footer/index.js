import { FaFacebookF, FaPhoneVolume, FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import Logo from "../../assets/logo.png";
import Button from "../Button";
import "./index.css";

export default function Footer() {
  const footerItems = [
    { title: "FAQ", path: "/" },
    { title: "Tentang Kami", path: "/" },
    { title: "Kebijakan Privasi", path: "/" },
    { title: "Syarat & Ketentuan", path: "/" },
  ];
  return (
    <div className=" w-full border-t-2">
      <div className="container grid grid-cols-1 gap-x-20 gap-y-8 pb-24 pt-8 lg:grid-cols-4 lg:pb-4">
        <div className="">
          <img src={Logo} alt="" className="mb-6 w-48" />
        </div>

        <div className="flex flex-col">
          {footerItems.map((item, index) => (
            <Button
              key={index}
              isLink
              path={item.path}
              title={item.title}
              className="footer-item"
            />
          ))}
        </div>

        <div className="flex flex-col">
          <h3 className="title">Ikuti Kami</h3>
          <Button isLink className="footer-item flex items-center gap-3">
            <FaFacebookF className="text-xl" />
            <span>Facebook</span>
          </Button>
          <Button isLink className="footer-item flex items-center gap-3">
            <FaTwitter className="text-xl" />
            <span>Twitter</span>
          </Button>
          <Button isLink className="footer-item flex items-center gap-3">
            <AiFillInstagram className="text-xl" />
            <span>Instagram</span>
          </Button>
        </div>

        <div className="flex flex-col">
          <Button isLink className="footer-item flex items-center gap-x-2">
            <div className="flex h-8 w-8 items-center justify-center">
              <IoLogoWhatsapp className="text-2xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm lg:text-base font-normal">+62-8123-4567-890</span>
            </div>
          </Button>

          <Button isLink className="footer-item flex items-center gap-x-2">
            <div className="flex h-8 w-8 items-center justify-center">
              <IoIosMail className="text-2xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm lg:text-base font-normal">
                contact@healthymed.com
              </span>
            </div>
          </Button>

          <Button isLink className="footer-item flex items-center gap-x-2">
            <div className="flex h-8 w-8 items-center justify-center">
              <FaPhoneVolume className="text-xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm lg:text-base font-normal">+62-8123-4567-890</span>
            </div>
          </Button>
        </div>
      </div>
      <div className="bg-dark py-2 text-center text-white">Footer</div>
    </div>
  );
}

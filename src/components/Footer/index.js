import { FaFacebookF, FaPhoneVolume, FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import Logo from "../../assets/logo.png";
import Button from "../Button";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 gap-x-20 gap-y-8 px-8 py-8 md:px-16 lg:grid-cols-4">
      <div className="">
        <img src={Logo} alt="" className="mb-8 w-48" />
        <Button isLink className="footer-item flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center">
            <IoLogoWhatsapp className="text-4xl" />
          </div>
          <div className="flex flex-col">
            <span>Chat WhatsApp</span>
            <span className="text-sm font-normal">+62-8123-4567-890</span>
          </div>
        </Button>

        <Button isLink className="footer-item flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center">
            <IoIosMail className="text-4xl" />
          </div>
          <div className="flex flex-col">
            <span>Email</span>
            <span className="text-sm font-normal">contact@healthymed.com</span>
          </div>
        </Button>

        <Button isLink className="footer-item flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center">
            <FaPhoneVolume className="text-3xl" />
          </div>
          <div className="flex flex-col">
            <span>Call Center</span>
            <span className="text-sm font-normal">+62-8123-4567-890</span>
          </div>
        </Button>
      </div>
      <div className="flex flex-col">
        <Button isLink className="footer-item" title="Tentang Kami" />
        <Button isLink className="footer-item" title="FAQ" />
        <Button isLink className="footer-item" title="Kebijakan Privasi" />
        <Button isLink className="footer-item" title="Syarat & Ketentuan" />
        <Button isLink className="footer-item" title="Karir" />
      </div>
      <div className="flex flex-col">
        <Button isLink className="footer-item" title="Blog" />
        <Button isLink className="footer-item" title="Cara Belanja" />
        <Button isLink className="footer-item" title="Promo" />
        <Button isLink className="footer-item" title="Diagnosis" />
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
    </div>
  );
}

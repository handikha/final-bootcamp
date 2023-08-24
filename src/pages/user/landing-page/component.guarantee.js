import Guarantee1 from "../../../assets/guarantee-1.svg";
import Guarantee2 from "../../../assets/guarantee-2.svg";
import Guarantee3 from "../../../assets/guarantee-3.svg";

export default function Guarantee() {
  return (
    <>
      <div className="flex h-full w-full items-center gap-10 overflow-hidden rounded-lg bg-slate-200/70 p-10 shadow-lg">
        <img src={Guarantee1} alt="" className="h-20 w-20" />
        <div className="">
          <h3 className="text-lg font-bold text-dark">100 % Obat Asli</h3>
          <p className="mt-1 text-dark">
            Semua produk yang kami jual dijamin asli & kualitas terbaik untuk
            anda.
          </p>
        </div>
      </div>

      <div className="flex h-full w-full items-center gap-10 overflow-hidden rounded-lg bg-slate-200/70 p-10 shadow-lg">
        <img src={Guarantee2} alt="" className="h-20 w-20" />
        <div className="">
          <h3 className="text-lg font-bold text-dark">Dijamin Hemat</h3>
          <p className="mt-1 text-dark">
            Kami menjamin akan mengembalikan uang dari selisih perbedaan harga.
          </p>
        </div>
      </div>

      <div className="flex h-full w-full items-center gap-10 overflow-hidden rounded-lg bg-slate-200/70 p-10 shadow-lg">
        <img src={Guarantee3} alt="" className="h-20 w-20" />
        <div className="">
          <h3 className="text-lg font-bold text-dark">Gratis Ongkir</h3>
          <p className="mt-1 text-dark">
            Tak perlu antre, Kami kirim ke alamat Anda bebas biaya ongkos kirim!
          </p>
        </div>
      </div>
    </>
  );
}

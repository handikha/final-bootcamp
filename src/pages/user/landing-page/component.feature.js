import Feature1 from "../../../assets/feature-1.svg";
import Feature2 from "../../../assets/feature-2.svg";

export default function Feature() {
  return (
    <>
      <div className="flex h-full w-full items-center justify-between overflow-hidden rounded-lg bg-amber-400 shadow-lg">
        <img src={Feature1} alt="" className="-ml-6 h-full w-1/2" />
        <div className="">
          <h3 className="title">Program Hamil</h3>
          <p className="mt-2 text-dark">
            Wujudkan rumah tanggamu dengan si buah hati
          </p>
        </div>
      </div>

      <div className="flex h-full w-full items-center justify-between overflow-hidden rounded-lg bg-blue-300 shadow-lg">
        <img src={Feature2} alt="" className="-ml-6 h-full w-1/2" />
        <div className="">
          <h3 className="title">Kebutuhan Untuk Idul Fitri</h3>
          <p className="mt-2 text-dark">
            Lengkapi kebutuhan gizi & asupan saat puasa
          </p>
        </div>
      </div>
    </>
  );
}

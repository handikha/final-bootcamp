import HeroImage from "../../../assets/hero.svg";
import Button from "../../../components/Button";

export default function Hero() {
  return (
    <>
      <h3 className="title lg:hidden">Punya resep Dokter?</h3>
      <div className="flex h-40 w-full items-center justify-between overflow-hidden rounded-lg shadow-lg">
        <div className="h-full w-1/2 lg:w-1/3">
          <img src={HeroImage} alt="" className="h-full w-full" />
        </div>
        <div className="hidden w-1/3 lg:block">
          <h3 className="title">Punya resep Dokter?</h3>
          <p className="mt-2 text-slate-500">
            Tak perlu antre & obat langsung dikirimkan ke lokasi anda! Foto
            tidak boleh lebih dari 10 MB
          </p>
        </div>
        <div className="w-1/2 pr-4 lg:w-fit lg:pr-10">
          <h3 className="title mt-2 text-slate-500 lg:hidden">
            Unggah resep doktermu disini!
          </h3>
          <Button isButton isPrimary title="Unggah Resep" className="lg:w-60" />
        </div>
      </div>
    </>
  );
}

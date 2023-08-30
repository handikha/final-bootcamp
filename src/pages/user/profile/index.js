import React from "react";
import Button from "../../../components/Button";

export default function Profile() {
  return (
    <div className="container grid h-[200vh] grid-cols-5 py-24">
      <div className="col-span-1">
        <div className="flex flex-col">
          <Button isLink title="Profil" />
          <Button isLink title="Produk" />
          <Button isLink title="Kategori" />
          <Button isLink title="Pesanan" />
          <Button isLink title="Pengaturan" />
          <Button isLink title="Keluar" />
        </div>
      </div>
      <div className="col-span-4">asd</div>
    </div>
  );
}

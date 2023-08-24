import React from "react";
import Button from "../Button";

export default function Card() {
  return (
    <div className="flex flex-col gap-2 rounded-lg p-5 text-dark shadow-lg">
      <div className="aspect-[4/3] w-full bg-primary">
        <img
          src="https://source.unsplash.com/600x400?medicine"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="text-sm font-bold uppercase lg:text-base">
        Lorem Ipsum Dolor Sit Amet
      </h3>
      <div className="flex items-center gap-2">
        <span className="rounded-md border border-red-400 px-2 py-1 text-sm font-semibold text-red-400">
          17%
        </span>
        <h3 className="text-sm text-slate-400 line-through">Rp. 250.202</h3>
      </div>
      <h3 className="font-bold">
        Rp. 232.202 / <span className="font-medium">Pack</span>
      </h3>
      <Button
        isButton
        isPrimaryOutline
        isBLock
        title="Keranjang"
        className="font-semibold"
      />
    </div>
  );
}

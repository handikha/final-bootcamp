import React from "react";
import Button from "../Button";
import formatNumber from "../../utils/formatNumber";

export default function Card({ id, name, price, image, stock, discount }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg p-5 text-dark shadow-lg">
      <div className="aspect-[4/3] w-full bg-primary">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <Button
        isLink
        className="text-sm font-bold uppercase duration-300 hover:text-primary lg:text-base"
      >
        {name}
      </Button>
      {discount ? (
        <div className="mt-auto flex items-center gap-2">
          <span className="rounded-md border border-red-400 px-2 py-1 text-xs font-semibold text-red-400">
            {discount}%
          </span>
          <h3 className="text-sm text-slate-400 line-through">
            Rp. {formatNumber(price)}
          </h3>
        </div>
      ) : (
        <div className="mt-auto" />
      )}
      <h3 className="font-bold">
        Rp.{" "}
        {discount
          ? formatNumber(((100 - discount) * price) / 100)
          : formatNumber(price)}{" "}
        / <span className="font-medium">Pack</span>
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

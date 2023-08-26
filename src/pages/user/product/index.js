import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../../json/products.json";
import Button from "../../../components/Button";
import formatNumber from "../../../utils/formatNumber";
import Input from "../../../components/Input";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import Footer from "../../../components/Footer";
import Card from "../../../components/Card";

export default function Product() {
  const { id } = useParams();
  const product = products.find((product) => product.id === +id);
  const [qty, setQty] = useState(1);

  const handleQty = (type) => {
    if (type === "add") {
      setQty(qty + 1);
    }

    if (type === "reduce" && qty > 1) {
      setQty(qty - 1);
    }
  };

  const handleQtyInput = (event) => {
    const newQty = event.target.value;

    if (newQty === "" || +newQty > 0) {
      setQty(newQty === "" ? "" : +newQty);
    }
  };

  const handleBlur = (event) => {
    const newQty = event.target.value;

    if (newQty === "") {
      setQty(1);
    }
  };

  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);

  return (
    <>
      <div className="container py-24">
        <div className="flex gap-2 text-dark">
          <Button
            isLink
            path="/products"
            title="Produk"
            className="font-semibold text-primary"
          />
          <span className="select-none">/</span>
          <Button
            isLink
            path="/products"
            title={product.category.name}
            className="font-semibold text-primary"
          />
          <span className="select-none">/</span>
          <span className="select-none">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:mt-8 lg:grid-cols-5 lg:gap-8">
          <div className="col-span-2 aspect-[5/4] w-full">
            <img
              src={product.image}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>

          <div className="col-span-2 flex w-full flex-col gap-4">
            <h3 className="title">{product.name}</h3>
            {product.discount ? (
              <div className="flex items-center gap-2">
                <span className="rounded-md border border-red-400 px-2 py-1 text-xs font-semibold text-red-400">
                  {product.discount}%
                </span>
                <h3 className="text-sm text-slate-400 line-through">
                  Rp. {formatNumber(product.price)}
                </h3>
              </div>
            ) : (
              <div className="" />
            )}
            <h3 className="text-2xl font-bold text-primary">
              Rp.{" "}
              {product.discount
                ? formatNumber(((100 - product.discount) * product.price) / 100)
                : formatNumber(product.price)}
            </h3>

            <div className="hidden lg:block">
              <h3 className="title">Detail</h3>
              <p>{product.desc}</p>
            </div>
          </div>

          <div className="col-span-1 mt-4 flex h-fit w-full flex-col gap-4 rounded-lg border p-4 shadow-lg lg:mt-0">
            <h3 className="title">Mau beli berapa?</h3>
            <div className="flex justify-center gap-2">
              <Button
                isSmall
                isSecondary
                title={<BsDashLg className="text-white" />}
                onClick={() => handleQty("reduce")}
              />
              <Input
                type="text"
                className="text-center "
                value={qty}
                onChange={handleQtyInput}
                onBlur={handleBlur}
              />
              <Button
                isSmall
                isPrimary
                title={<BsPlusLg className="text-white" />}
                onClick={() => handleQty("add")}
              />
            </div>

            <div className="flex items-center justify-between">
              <h3 className="">Subtotal</h3>
              <h3 className="text-lg font-bold text-primary">
                Rp.{" "}
                {product.discount
                  ? formatNumber(
                      (((100 - product.discount) * product.price) / 100) * qty
                    )
                  : formatNumber(product.price * qty)}
              </h3>
            </div>

            <Button isBLock isButton isPrimary title="Masukkan Keranjang" />
          </div>
        </div>

        <div className="mt-8 lg:hidden">
          <h3 className="title">Detail</h3>
          <p>{product.desc}</p>
        </div>

        <div className="mt-8 border-t-2 pt-8">
          <div className="flex items-center justify-between">
            <h3 className="title text-2xl">Produk Lainnya</h3>
            <Button
              isLink
              path="/products"
              title="Lihat Semua"
              className="see-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {products
              .map((product) => (
                <Card
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  discount={product.discount}
                  image={product.image}
                  stock={product.stock}
                />
              ))
              .slice(0, 6)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

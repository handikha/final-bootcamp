import React, { useState } from "react";
import cart from "../../../json/cart.json";
import products from "../../../json/products.json";
import formatNumber from "../../../utils/formatNumber";
import Button from "../../../components/Button";
import { AnimatePresence, motion } from "framer-motion";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import Input from "../../../components/Input";

export default function Cart() {
  const selectedProduct = cart.map((item) => item.itemId);

  const cartItems = products.filter((product) =>
    selectedProduct.includes(product.id)
  );

  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelectItem = (itemId) => {
    if (selectedItems.some((item) => item.id === itemId)) {
      setSelectedItems(selectedItems.filter((item) => item.id !== itemId));
    } else {
      const selectedItem = cartItems.find((item) => item.id === itemId);
      setSelectedItems([...selectedItems, selectedItem]);
    }
  };

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
  return (
    <div className="container relative py-24">
      <h3 className="title">Keranjang</h3>
      <div className="grid grid-cols-1 gap-20 pb-32 lg:grid-cols-3 lg:pb-0">
        <div className="col-span-2 flex flex-col">
          {cartItems.map((item) => (
            <div className="flex items-center gap-4 border-b-2 py-8">
              <input
                className="h-5 w-5"
                type="checkbox"
                checked={selectedItems.some(
                  (selectedItem) => selectedItem.id === item.id
                )}
                onChange={() => toggleSelectItem(item.id)}
              />

              <div className="aspect-square h-20">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex w-full flex-col lg:flex-row">
                <div className="">
                  <h3 className="">{item.name}</h3>
                  <div className="items-center gap-2">
                    {item.discount > 0 && (
                      <div className="mt-auto flex items-center gap-2">
                        <span className="rounded-md border border-red-400 px-2 py-1 text-xs font-semibold text-red-400">
                          {item.discount}%
                        </span>
                        <h3 className="text-sm text-slate-400 line-through">
                          Rp. {formatNumber(item.price)}
                        </h3>
                      </div>
                    )}
                    <h3 className="font-bold">
                      Rp.{" "}
                      {formatNumber(((100 - item.discount) * item.price) / 100)}
                    </h3>
                  </div>
                </div>

                <div className="h-8 w-1/2 lg:ml-auto lg:w-1/5 ">
                  <div className="flex h-full justify-center gap-2">
                    <Button
                      isSmall
                      isSecondary
                      title={<BsDashLg className="text-white" />}
                      onClick={() => handleQty("reduce")}
                    />
                    <Input
                      type="text"
                      className="h-full text-center"
                      value={
                        cart.find((cartItem) => cartItem.itemId === item.id)
                          ?.qty
                      }
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
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="fixed bottom-20 left-0 col-span-1 h-fit w-full rounded-lg border bg-slate-50 p-4 shadow-lg lg:static">
          <h3 className="title">Ringkasan Belanja</h3>

          <div className="hidden lg:block">
            {selectedItems.map((item) => {
              const cartItem = cart.find(
                (cartItem) => cartItem.itemId === item.id
              );
              const price = ((100 - item.discount) * item.price) / 100;
              const totalItemPrice = cartItem.qty * price;

              return (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{
                    opacity: 0,
                  }}
                  className="mt-4 border-b-2"
                >
                  <p>{item.name}</p>
                  <div className="flex justify-between">
                    <p className="">
                      {cartItem.qty} x {formatNumber(price)}
                    </p>

                    <p>{formatNumber(totalItemPrice)}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-between font-bold">
            <p className="text-lg">Total</p>
            <p>
              Rp.{" "}
              {formatNumber(
                selectedItems
                  .map((item) => {
                    const cartItem = cart.find(
                      (cartItem) => cartItem.itemId === item.id
                    );
                    const discountPrice =
                      ((100 - item.discount) * item.price) / 100;
                    return cartItem.qty * discountPrice;
                  })
                  .reduce((total, price) => total + price, 0)
              )}
            </p>
          </div>

          <div className="mt-4">
            <Button
              isBLock
              isButton
              isPrimary
              title="Check Out"
              isDisabled={selectedItems.length === 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

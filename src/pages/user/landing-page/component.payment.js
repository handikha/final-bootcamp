import React from "react";

export default function Payment() {
  const payments = [
    "bank-bca",
    "bank-mandiri",
    "bank-permata",
    "ovo",
    "gopay",
    "shopeepay",
  ];
  return (
    <div className="w-full bg-slate-200/70 px-6 py-6">
      <h3 className="text-center font-bold text-dark">Metode Pembayaran</h3>
      <div className="mt-4  flex flex-wrap items-center justify-center gap-12">
        {payments.map((payment, index) => (
          <img
            key={index}
            src={require(`../../../assets/payment/${payment}.png`)}
            alt=""
            className="w-20 lg:w-28"
          />
        ))}
      </div>
    </div>
  );
}

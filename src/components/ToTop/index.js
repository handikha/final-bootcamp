import React from "react";
import { HiDocumentText } from "react-icons/hi2";

export default function ToTop({ className }) {
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="fixed bottom-4 right-4 z-20 flex flex-col gap-2">
      <div
        className={`group flex aspect-square w-12 cursor-pointer items-center justify-center rounded-full bg-primary shadow-md shadow-slate-400 delay-100 duration-300 hover:bg-teal-700 hover:delay-0 dark:shadow-none md:w-14 ${className}`}
        onClick={toTop}
      >
        <HiDocumentText className="text-2xl text-white" />
        <div className="invisible absolute right-16 w-32 rounded-md bg-primary p-2 text-center text-sm font-semibold text-white opacity-0 shadow-md duration-200 group-hover:visible group-hover:opacity-100">
          Upload Resep
        </div>
      </div>

      <div
        className={`group flex aspect-square w-12 cursor-pointer items-center justify-center rounded-full bg-slate-200 shadow-md shadow-slate-400 duration-300 hover:bg-slate-300 dark:shadow-none md:w-14 ${className}`}
        onClick={toTop}
      >
        <div className="relative top-[3px] aspect-square w-1/4 rotate-45 border-[4px] border-b-0 border-r-0 border-primary" />

        <div className="invisible absolute right-16 w-20 rounded-md bg-primary p-2 text-center text-sm font-semibold text-white opacity-0 shadow-md duration-200 group-hover:visible group-hover:opacity-100">
          Ke Atas
        </div>
      </div>
    </div>
  );
}

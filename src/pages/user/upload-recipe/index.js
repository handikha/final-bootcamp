import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

import Button from "../../../components/Button";

export default function UploadRecipe() {
  const [error, setError] = useState("");

  const [file, setFile] = useState(null);

  const [previewImage, setPreviewImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile.size > 1000000) {
      alert("file too large. Max 1 MB");
      return;
    }
    setFile(selectedFile);

    // show prev image
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const removeImage = () => {
    setFile(null);
    setPreviewImage(null);
  };

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: { "image/*": [".jpg", ".png", ".jpeg"] },
    noClick: true,
    noKeyboard: true,
  });

  return (
    <div className="container py-24 lg:w-1/2">
      <h3 className="title">Kirim Resep</h3>
      <p className="text-sm text-slate-500">
        Tak perlu antre & obat langsung dikirimkan ke lokasi anda!{" "}
        <span className="font-semibold text-dark">
          Foto tidak boleh lebih dari 10 MB.
        </span>
      </p>
      <div className="mt-8 flex h-fit w-full flex-col items-center justify-center rounded-lg border p-8 shadow-lg">
        <p className="mb-2 text-center text-lg font-semibold text-dark md:text-lg">
          Unggah Resep
        </p>

        <div
          {...getRootProps({
            className: `w-full h-fit flex items-center justify-center flex-col mt-2 p-8 border-2 border-dark
            border-dashed rounded-md ${isDragActive ? "bg-teal-200/30" : null}`,
          })}
        >
          <input
            {...getInputProps({
              name: "image",
            })}
          />

          {previewImage ? (
            <>
              <img src={previewImage} className="w-64" />
              <div className="mt-4 flex justify-center gap-2 ">
                <Button
                  onClick={removeImage}
                  title="Hapus Gambar"
                  isButton
                  isSecondary
                  className="mt-2"
                />
                {error.image && (
                  <div className="text-base text-red-500 dark:text-red-400">
                    {error.image}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="md:text-md text-center text-sm text-slate-400">
                {file === null && (
                  <>
                    <span className="select-none">
                      Tarik & Letakkan Gambarmu Disini
                    </span>
                    <div className="flex items-center gap-2">
                      <hr className="h-[2px] w-full bg-slate-300" />
                      <p className="text-md mb-2 mt-2 text-center font-normal text-slate-400">
                        Atau
                      </p>
                      <hr className="h-[2px] w-full bg-slate-300" />
                    </div>

                    <Button
                      onClick={open}
                      title="Pilih File Gambar"
                      isButton
                      isBLock
                      isPrimaryOutline
                    />
                  </>
                )}
              </div>
            </>
          )}
        </div>

        <div className="mt-6 flex w-full justify-end">
          <Button
            title="Unggah Resep"
            onClick={() => alert("ok")}
            isButton
            isPrimary
            isDisabled={previewImage ? false : true}
          />
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import categories from "../../../json/categories.json";
import products from "../../../json/products.json";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import "./index.css";
import Footer from "../../../components/Footer";

export default function AllProducts() {
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setSelectedCategory(categories[0].name);
  }, []);
  return (
    <>
      <div className="container py-24">
        <div className="col-span-1 grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="col-span-1 h-fit w-full rounded-lg lg:block lg:p-4 lg:shadow-lg">
            <h3 className="title">Kategori</h3>
            <div className="categories-wrapper mt-2 flex flex-nowrap gap-8 overflow-auto lg:flex-col lg:items-start lg:justify-start lg:gap-3">
              {categories.map((category) => (
                <Button
                  isLink
                  className={`product-category ${
                    selectedCategory === category.name && "active"
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="col-span-1 mt-4 lg:col-span-4">
            <h3 className="title">{selectedCategory}</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <Card
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  discount={product.discount}
                  image={product.image}
                  stock={product.stock}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

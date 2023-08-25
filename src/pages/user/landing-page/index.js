import categories from "../../../json/categories.json";
import products from "../../../json/products.json";
import Card from "../../../components/Card";
import Categories from "./component.categories";
import Button from "../../../components/Button";
import Feature from "./component.feature";
import Hero from "./component.hero";
import Guarantee from "./component.guarantee";
import Payment from "./component.payment";
import Footer from "../../../components/Footer";

export default function LandingPage() {
  return (
    <>
      <div className="container pt-24">
        <Hero />

        <div className="mt-4">
          <Categories categories={categories} />
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <h3 className="title text-2xl">Popular Product</h3>
            <Button isLink title="Lihat Semua" className="see-all" />
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

        <div className="grid w-full grid-cols-1 justify-between gap-4 py-10 md:grid-cols-2">
          <Feature />
        </div>

        <div className="grid w-full grid-cols-1 justify-between gap-4 py-10 lg:grid-cols-3">
          <Guarantee />
        </div>
      </div>

      <Payment />
      <Footer />
    </>
  );
}

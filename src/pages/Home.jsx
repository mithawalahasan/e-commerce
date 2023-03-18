import React, { useContext } from "react";
import { Context } from "../contexts/ProductContext";
import "../output.css";
import Product from "../components/Product";
import Hero from "../components/Hero";
const Home = () => {
  const { products } = useContext(Context);
  // get only men's and womes's clothing industry
  const filteredproducts = products.filter((product) => {
    return (
      product.category === "men's clothing" ||
      product.category === "women's clothing"
    );
  });
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredproducts.map((product) => {
              return (
                // <div className="w-full h-[300px] bg-pink-200" key={product.id}>
                //   {product.title}
                // </div>
                <Product key={product.id} product={product} />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

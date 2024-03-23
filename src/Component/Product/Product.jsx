import React from "react";
import Header from "../Shared/Header";
import ProductCard from "./ProductCard";
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";
import ProductCard2 from "./ProductCard2";

const ProductData = [
  {
    id: 1,
    img: Img5,
    title: "Samsung Headphone",
    price: "4000",
    aosDelay: "0",
    count:1,
  },
  {
    id: 2,
    img: Img2,
    title: "Noise Smartwatch",
    price: "2000",
    aosDelay: "200",
    count:1,
  },
  {
    id: 3,
    img: Img6,
    title: "Zebronics Headphones",
    price: "2500",
    aosDelay: "400",
    count:1,
  },
  {
    id: 4,
    img: Img7,
    title: "Apple Headphones",
    price: "20000",
    aosDelay: "600",
    count:1,
  },
];

const ProductData2 = [
  {
    id: 5,
    img: Img1,
    title: "Boat Headphone",
    price: "1400",
    aosDelay: "0",
    count:1,
  },
  {
    id: 6,
    img: Img2,
    title: "Firebolt Smartwatch",
    price: "2000",
    aosDelay: "200",
    count:1,
  },
  {
    id: 7,
    img: Img3,
    title: "Sony Headphones",
    price: "2500",
    aosDelay: "400",
    count:1,
  },
  {
    id: 8,
    img: Img4,
    title: "JBL Headphones",
    price: "3000",
    aosDelay: "600",
    count:1,
  },
];

const Product = ({ handleClick, warning }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Header title="Our Products" subtitle={"Explore our products"} />

        {/* Body Section */}
        <ProductCard productData={ProductData} handleClick={handleClick} warning={warning} />
        <ProductCard2 productData2={ProductData2} handleClick={handleClick} warning={warning} />
      </div>
    </div>
  );
};

export default Product;

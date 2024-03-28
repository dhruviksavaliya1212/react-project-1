import React, { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Category from "./Component/Category/Category";
import Category2 from "./Component/Category/Category2";
import Services from "./Component/Services/Services";
import Banner from "./Component/Banner/Banner";
import Banner2 from "./Component/Banner/Banner2";
import Product from "./Component/Product/Product";
import Cart from "./Component/Cart/Cart";
import headphone from "./assets/hero/headphone.png";
import smartwatch from "./assets/category/smartwatch2-removebg-preview.png";
import Blog from "./Component/Blog/Blog";
import Partners from "./Component/Partners/Partners";
import Footer from "./Component/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let present = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        present = true;
      }
    });
    if (present) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);

      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].count += d;

    if (tempArr[ind].count === 0) tempArr[ind].count = 1;
    setCart([...tempArr]);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  });

  const BannerData = {
    id: 1,
    discount: "30% Off",
    title: "Happy Hours",
    date: "14 jan to 28 jan",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    description:
      "lorem ipsum ddlor,amet consterence adipting elit.eque done son",
    bgcolor: "primary",
  };
  const BannerData2 = {
    id: 2,
    discount: "30% Off",
    title: "Finale Sale",
    date: "10 jan to 28 jan",
    image: smartwatch,
    title2: "Smart Solo",
    title3: "Winter Sale",
    description:
      "lorem ipsum ddlor,amet consterence adipting elit.eque done son",
    bgcolor: "#2dcc6f",
  };

  return (
    <div className="bg-zinc-100/80 dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <div>
          {" "}
          <Hero /> <Category /> <Category2 /> <Services />{" "}
          <Banner BannerData={BannerData} />{" "}
          <Product handleClick={handleClick} warning={warning} />{" "}
          <Banner2 BannerData2={BannerData2} /> <Blog /> <Partners /> <Footer />
        </div>
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
};

export default App;

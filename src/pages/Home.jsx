import React from 'react';
import Slider from "../Components/Slider";
import Topproduct from "./Topproduct";
import Seasonalpromain from '../Components/Seasonalpromain';
import Aboutbrands from './Aboutbrands';
import Footer from '../Footer';
import Mainnavbar from '../Components/Mainnavbar';
import "./Home.css"

const Home = () => {

  const topDeals1 = [
    { name: "HP Laptop 15 Series", src: "https://m.media-amazon.com/images/I/71fJ-gmBZtL._AC_SL1500_.jpg", price: "6000" },
    { name: "Canon Mirrorless Camera", src: "https://images.meesho.com/images/products/617890237/okpaf_512.avif?width=360", price: "5000" },
    { name: "Boat Airdopes 141", src: "https://m.media-amazon.com/images/I/51HBom8xz7L._SL1500_.jpg", price: "999" },
    { name: "Samsung 24-inch Monitor", src: "https://m.media-amazon.com/images/I/91R6T6EmccL.jpg", price: "4500" },
    { name: "Logitech MK270 Keyboard Mouse", src: "https://i.ebayimg.com/images/g/6McAAOSwbdFmJVHM/s-l225.jpg", price: "1200" }
  ];

  const topDeals2 = [
    { name: "iPhone 15 Pro", src: "https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_SL1500_.jpg", price: "10000" },
    { name: "Samsung Galaxy Watch 5", src: "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_SL1500_.jpg", price: "6500" },
    { name: "Realme Buds Wireless 3", src: "https://rukminim2.flixcart.com/image/612/612/krayqa80/headphone/x/9/r/rma2010-realme-original-imag54ey5mxggzcy.jpeg?q=70", price: "899" },
    { name: "Redmi 12 5G", src: "https://m.media-amazon.com/images/I/81itQPVn-GL._SL1500_.jpg", price: "9500" },
    { name: "Samsung Fast Charger 25W", src: "https://m.media-amazon.com/images/I/516LU0H963L._SL1500_.jpg", price: "799" }
  ];

  const topDeals3 = [
    { name: "Sony WH-1000XM5", src: "https://shopatsc.com/cdn/shop/products/2500x2500_Black_5.jpg?v=1694415813", price: "4000" },
    { name: "Lenovo Gaming Laptop", src: "https://p3-ofp.static.pub/fes/cms/2021/09/17/f4p81jvjgoktv14j4r8jjemfb6mozq914984.png", price: "9000" },
    { name: "Acer Nitro Gaming Mouse", src: "https://static-ecpa.acer.com/media/catalog/product/a/c/acer-nitro-mouse-nmw810-main.png?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500&format=jpeg", price: "1100" },
    { name: "Cosmic Byte GK-16 Keyboard", src: "https://nationalpc.in/image/cache/catalog/product/Keyboard/Cosmic-Byte/GK-16-Firefly/3-130x130.jpg.webp", price: "1600" },
    { name: "JBL Go 3 Speaker", src: "https://www.jbl.com.ph/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw2d09df7a/JBL_GO_3_DETAIL_1_BLACK_0020.png?sw=537&sfrm=png", price: "1999" }
  ];

  const topDeals4 = [
    { name: "Dell Inspiron 15", src: "https://images-na.ssl-images-amazon.com/images/I/71gbrvRJI-L.jpg", price: "8500" },
    { name: "Asus Vivobook 16", src: "https://rukminim2.flixcart.com/image/312/312/k91o6fk0/computer/k/8/h/asus-original-imafqxfewfakvj64.jpeg?q=70", price: "7000" },
    { name: "HP Smart Tank Printer", src: "https://in-files.apjonlinecdn.com/landingpages/npi/hp-smart-tank-500-series-printers/images/w100_ksp_img_2.jpg", price: "6500" },
    { name: "Mi Power Bank 3i", src: "https://www.dealsplant.com/cdn/shop/products/mi-power-bank-mi-power-bank-3i-20000mah-triple-output-and-dual-input-port-18w-fast-charging-16350367055947.jpg?v=1647763453&width=1200", price: "1199" },
    { name: "OnePlus Bullets Z2", src: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/250558_8_S7T_6xo0U.png?updatedAt=1758551331500", price: "1299" }
  ];

  return (
    <>
      <div className='Home'>
        <Mainnavbar />

        <Topproduct title="Top Deals - 1" products={topDeals1} />
        <Slider />
        <Seasonalpromain />

        <Topproduct title="Top Deals - 2" products={topDeals2} />
        <Topproduct title="Top Deals - 3" products={topDeals3} />
        <Topproduct title="Top Deals - 4" products={topDeals4} />

        <Aboutbrands />
        <Footer />
      </div>
    </>
  );
};

export default Home;

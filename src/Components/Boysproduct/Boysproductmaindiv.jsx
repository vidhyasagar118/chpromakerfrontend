import React, { useState } from "react";
import "./Boysproduct.css";
import Boysproduct from "./Boysproduct";

const Boysproductmaindiv = () => {
  const [visible, setVisible] = useState(false);

  const toggleMore = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div id="boysproductmaindiv">
        <h1 >Boys Products</h1>

        <div id="visibleboyproduct">

          <Boysproduct
            src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/33091353/2025/6/16/2a6cedd9-62da-4bcc-b0b2-7de775f9eb871750055263951-CAVIO-Boys-Comfort-Textured-Casual-Shirt-241750055263459-1.jpg"
            name="Casual Boys T-shirt"
            brandname="KiddoWear"
            discount="30% OFF"
            oldprice="₹799"
            currprice="₹559"
            delivery="Tomorrow"
          />
          <Boysproduct
  src="https://gulabchand.com/cdn/shop/files/PUN_4601.jpg?v=1744917491&width=1800"
  name="Printed Cotton Shirt"
  brandname="MiniStyle"
  discount="25% OFF"
  oldprice="₹699"
  currprice="₹524"
  delivery="Tomorrow"
/>

<Boysproduct
  src="https://www.selectedhomme.in/cdn/shop/files/141727701_g1.jpg?v=1745507068&width=1080"
  name="Graphic Crew-Neck T-Shirt"
  brandname="YoungVibe"
  discount="40% OFF"
  oldprice="₹599"
  currprice="₹359"
  delivery="2 Days"
/>

<Boysproduct
  src="https://www.urbanofashion.com/cdn/shop/files/mxjean-004-lblue-1.jpg?v=1727181931"
  name="Slim Fit Denim Jeans"
  brandname="Kidster"
  discount="35% OFF"
  oldprice="₹1199"
  currprice="₹779"
  delivery="Tomorrow"
/>

<Boysproduct
  src="https://images-na.ssl-images-amazon.com/images/I/61WNfYWR6uL.jpg"
  name="Cotton Cargo Shorts"
  brandname="UrbanJr"
  discount="20% OFF"
  oldprice="₹499"
  currprice="₹399"
  delivery="3 Days"
/>

<Boysproduct
  src="https://media.istockphoto.com/id/1304155502/photo/blank-hooded-sweatshirt-mockup-with-zipper-in-front-view.jpg?s=612x612&w=0&k=20&c=R3GFyOd9QNWc6QCPXtPJh2Jvm4dF3JaCmqf6niy7O8c="
  name="Hooded Sweatshirt"
  brandname="CoolKid"
  discount="45% OFF"
  oldprice="₹1499"
  currprice="₹824"
  delivery="Tomorrow"
/>

<Boysproduct
  src="https://images.meesho.com/images/products/484668787/rh45v_512.webp?width=360"
  name="Cotton Track Pants"
  brandname="SportyBoy"
  discount="30% OFF"
  oldprice="₹899"
  currprice="₹629"
  delivery="2 Days"
/>

<Boysproduct
  src="https://m.media-amazon.com/images/I/71Qd-hgHAwL.jpg"
  name="Festive Printed Kurta"
  brandname="TradKids"
  discount="50% OFF"
  oldprice="₹1299"
  currprice="₹649"
  delivery="Tomorrow"
/>


          <Boysproduct
            src="https://m.media-amazon.com/images/I/71+iqr3XMWL.jpg"
            name="Boys Denim Jacket"
            brandname="TrendyBoys"
            discount="40% OFF"
            oldprice="₹1999"
            currprice="₹1199"
            delivery="Free Delivery"
          />

          <Boysproduct
            src="https://images.footlocker.com/is/image/EBFL2/W2626003?wid=250&hei=250"
            name="Boys Sports Shoes"
            brandname="RunFast"
            discount="25% OFF"
            oldprice="₹1599"
            currprice="₹1199"
            delivery="2 Days"
          />

          <Boysproduct
            src="https://artyourcat.com/cdn/shop/files/Cartoon_Cat_Hoodie_with_Custom_Cat_Print_Design.png?v=1735016014&width=1946"
            name="Cartoon Print Hoodie"
            brandname="KidsGear"
            discount="20% OFF"
            oldprice="₹999"
            currprice="₹799"
            delivery="Tomorrow"
          />
          <Boysproduct
  src="https://www.tacvasen.com/cdn/shop/products/mens-casual-lightweight-bomber-jacket-989219.jpg?v=1701315791&width=720"
  name="Lightweight Bomber Jacket"
  brandname="JrStyle"
  discount="35% OFF"
  oldprice="₹1999"
  currprice="₹1299"
  delivery="Tomorrow"
/>

<Boysproduct
  src="https://www.podexpert.com/images/imagecache/277x281/webp/PodowellDamiaMarine01.png"
  name="Comfort Walking Sandals"
  brandname="TinySteps"
  discount="20% OFF"
  oldprice="₹799"
  currprice="₹639"
  delivery="2 Days"
/>

<Boysproduct
  src="https://www.montecarlo.in/cdn/shop/files/224066280-1-38_5.jpg?v=1731408111&width=1080"
  name="Printed Zip-Up Sweatshirt"
  brandname="YoungCloud"
  discount="30% OFF"
  oldprice="₹999"
  currprice="₹699"
  delivery="Tomorrow"
/>

<Boysproduct
  src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/28554994/2024/5/16/e4ae186c-0141-40a0-919e-8225318b5f4f1715834553458ShirtsencorebyINVICTUSWomenShirtsencorebyINVICTUSWomenShirts1.jpg"
  name="Slim Fit Formal Trousers"
  brandname="SmartKid"
  discount="40% OFF"
  oldprice="₹1299"
  currprice="₹779"
  delivery="3 Days"
/>


        </div>

        <div className="boyproducthidemaindiv">
          <button className="boyproductbtn" onClick={toggleMore}>
            {visible ? "Hide" : "More Products"}
          </button>

          <div
            id="visibleboyproduct"
            style={{ display: visible ? "grid" : "none" }}
          >
            <Boysproduct
              src="https://www.jackjones.in/cdn/shop/files/900860401_g1.jpg?v=1745344546&width=1080"
              name="Printed Boys Shirt"
              brandname="SmartKids"
              discount="35% OFF"
              oldprice="₹1299"
              currprice="₹849"
              delivery="Free Delivery"
            />

            <Boysproduct
              src="https://m.media-amazon.com/images/I/61vjL5qAbIL.jpg"
              name="Boys Cargo Pants"
              brandname="UrbanBoy"
              discount="30% OFF"
              oldprice="₹1499"
              currprice="₹1049"
              delivery="3 Days"
            />

            <Boysproduct
              src="https://m.media-amazon.com/images/I/61Fwr6a80DL.jpg"
              name="Spiderman Watch"
              brandname="HeroTime"
              discount="20% OFF"
              oldprice="₹599"
              currprice="₹479"
              delivery="Free Delivery"
            />

            <Boysproduct
              src="https://myneemoe.in/cdn/shop/files/Serial_No-1_6544c461-072f-4059-aadb-a2d69fe3ec5e.jpg?v=1726564152&width=533"
              name="Kids School Bag"
              brandname="EduWorld"
              discount="40% OFF"
              oldprice="₹999"
              currprice="₹599"
              delivery="Tomorrow"
            />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Boysproductmaindiv;

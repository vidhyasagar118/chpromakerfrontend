import React, { useState } from 'react'
import "./Girlproduct.css"
import Girlproduct from './Girlproduct'

const Girlproductmaindiv = () => {

  const [visible, setVisible] = useState(false);

  const toggleMore = () => {
    setVisible(!visible);
  }

  return (
    <>
      <div id='girlsproductmaindiv'>
        <h1>Girl Products</h1>

        <div id='visiblegirlproduct'>
            <Girlproduct
              src="https://ivycityco.com/cdn/shop/files/MiniRainieDressinRose-Mini25-3.jpg?v=1761233640&width=453"
              name="Floral Dress"
              brandname="H&M"
              discount="50% OFF"
              oldprice="₹1999"
              currprice="₹999"
              delivery="Tomorrow"
            />
             
            
 <Girlproduct
  src="https://images.meesho.com/images/products/436265190/mexqo_512.webp?width=512"
  name="Floral Party Frock"
  brandname="KidzStyle"
  discount="30% Off"
  oldprice="₹1499"
  currprice="₹1049"
  delivery="Free Delivery"
/>

<Girlproduct
  src="https://cstoreclothin.in/cdn/shop/files/IMG_344121.jpg?v=1714555621&width=1445"
  name="Pink Princess Gown"
  brandname="LittleQueen"
  discount="25% Off"
  oldprice="₹1999"
  currprice="₹1499"
  delivery="Delivery in 3 days"
/>

<Girlproduct
  src="https://i.etsystatic.com/57101144/c/1980/1980/0/945/il/f996ba/7115769547/il_300x300.7115769547_lb3x.jpg"
  name="Casual Cotton Dress"
  brandname="TinyTrends"
  discount="40% Off"
  oldprice="₹999"
  currprice="₹599"
  delivery="Free Delivery"
/>

<Girlproduct
  src="https://i.pinimg.com/originals/63/83/e5/6383e5bb667acdd5406051714dd32195.jpg"
  name="Red Party Wear Dress"
  brandname="StarKids"
  discount="35% Off"
  oldprice="₹1799"
  currprice="₹1169"
  delivery="Delivery Tomorrow"
/>

<Girlproduct
  src ="https://m.media-amazon.com/images/I/71uVTKlrc5L.jpg"
  name="Summer Floral Maxi"
  brandname="CuteBerry"
  discount="20% Off"
  oldprice="₹1299"
  currprice="₹1039"
  delivery="Free Delivery"
/>

<Girlproduct
  src="https://m.media-amazon.com/images/I/6137mjWpggL.jpg"
  name="Pink Digital Watch"
  brandname="TimeKids"
  discount="30% Off"
  oldprice="₹799"
  currprice="₹559"
  delivery="Free Delivery"
/>

<Girlproduct
  src="https://m.media-amazon.com/images/I/51QB+iP4aHL.jpg"
  name="Sparkle Party Shoes"
  brandname="CuteSteps"
  discount="25% Off"
  oldprice="₹1299"
  currprice="₹974"
  delivery="Delivery in 2 days"
/>

<Girlproduct
  src="https://m.media-amazon.com/images/I/81gCu9RW3pL.jpg"
  name="Unicorn Mini Backpack"
  brandname="LilBags"
  discount="40% Off"
  oldprice="₹999"
  currprice="₹599"
  delivery="Free Delivery"
/>

<Girlproduct
  src="https://i5.walmartimages.com/seo/Wowstyle-Flower-Headbands-For-Women-Hippie-Floral-Hairband-Boho-Fairy-Crown-Wedding-Parties-Outfit-Costume-Hair-Accessories_eb5c9bb5-f425-4438-a4f7-4459b894b95c.a9004358c55efd18eb006eb69437ac01.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF"
  name="Floral Hairband Set"
  brandname="PrettyKids"
  discount="20% Off"
  oldprice="₹299"
  currprice="₹239"
  delivery="Delivery Tomorrow"
/>

<Girlproduct
  src="https://media.gettyimages.com/id/1407088772/photo/cute-small-girl-with-sunglasses.jpg?s=612x612&w=0&k=20&c=HXGMxVnL0q8RRiJxipPS-fFQz-ZMHhlLMBk1q0nYOe8="
  name="Kids Stylish Sunglasses"
  brandname="SunBerries"
  discount="35% Off"
  oldprice="₹699"
  currprice="₹454"
  delivery="Free Delivery"
/>

<Girlproduct
  src="https://m.media-amazon.com/images/I/51k0lZy0vJL.jpg"
  name="Princess Doll Toy"
  brandname="ToyWorld"
  discount="30% Off"
  oldprice="₹899"
  currprice="₹629"
  delivery="Free Delivery"
/>

<Girlproduct
  src="https://i.etsystatic.com/24480679/r/il/97f848/4815539300/il_600x600.4815539300_18ld.jpg"
  name="Pink Comfortable Sandals"
  brandname="KidFoot"
  discount="25% Off"
  oldprice="₹799"
  currprice="₹599"
  delivery="Delivery in 3 days"
/>

<Girlproduct
  src="https://m.media-amazon.com/images/I/715QH0EVp2L.jpg"
  name="Cute Cartoon School Bag"
  brandname="EduKids"
  discount="40% Off"
  oldprice="₹1499"
  currprice="₹899"
  delivery="Free Delivery"
/>

<Girlproduct
  src="https://images-na.ssl-images-amazon.com/images/I/71yZCKlOAVL.jpg"
  name="women Jewelry Set"
  brandname="SparkleStar"
  discount="35% Off"
  oldprice="₹499"
  currprice="₹324"
  delivery="Delivery Tomorrow"
/>
          </div>


            
          <div className='girlproducthidemaindiv'>
            <button className='girlproductbtn' onClick={toggleMore}>
              {visible ? "Hid" : "More products"}
            </button>


            <div  id='girlsproductmaindiv'  style={{ display: visible ? "block" : "none", color: "white" }}>
                      <div id='visiblegirlproduct'>

 <Girlproduct
              src="https://ivycityco.com/cdn/shop/files/MiniRainieDressinRose-Mini25-3.jpg?v=1761233640&width=453"
              name="Floral Dress"
              brandname="H&M"
              discount="50% OFF"
              oldprice="₹1999"
              currprice="₹999"
              delivery="Tomorrow"
            />
             
            
 <Girlproduct
  src="https://images.meesho.com/images/products/436265190/mexqo_512.webp?width=512"
  name="Floral Party Frock"
  brandname="KidzStyle"
  discount="30% Off"
  oldprice="₹1499"
  currprice="₹1049"
  delivery="Free Delivery"
/>

<Girlproduct
  src="https://cstoreclothin.in/cdn/shop/files/IMG_344121.jpg?v=1714555621&width=1445"
  name="Pink Princess Gown"
  brandname="LittleQueen"
  discount="25% Off"
  oldprice="₹1999"
  currprice="₹1499"
  delivery="Delivery in 3 days"
/>

<Girlproduct
  src="https://i.etsystatic.com/57101144/c/1980/1980/0/945/il/f996ba/7115769547/il_300x300.7115769547_lb3x.jpg"
  name="Casual Cotton Dress"
  brandname="TinyTrends"
  discount="40% Off"
  oldprice="₹999"
  currprice="₹599"
  delivery="Free Delivery"
/>

<Girlproduct
  src="https://i.pinimg.com/originals/63/83/e5/6383e5bb667acdd5406051714dd32195.jpg"
  name="Red Party Wear Dress"
  brandname="StarKids"
  discount="35% Off"
  oldprice="₹1799"
  currprice="₹1169"
  delivery="Delivery Tomorrow"
/>

<Girlproduct
  src ="https://m.media-amazon.com/images/I/71uVTKlrc5L.jpg"
  name="Summer Floral Maxi"
  brandname="CuteBerry"
  discount="20% Off"
  oldprice="₹1299"
  currprice="₹1039"
  delivery="Free Delivery"
/>

<Girlproduct
  src="https://m.media-amazon.com/images/I/6137mjWpggL.jpg"
  name="Pink Digital Watch"
  brandname="TimeKids"
  discount="30% Off"
  oldprice="₹799"
  currprice="₹559"
  delivery="Free Delivery"
/>

<Girlproduct
  src="https://m.media-amazon.com/images/I/51QB+iP4aHL.jpg"
  name="Sparkle Party Shoes"
  brandname="CuteSteps"
  discount="25% Off"
  oldprice="₹1299"
  currprice="₹974"
  delivery="Delivery in 2 days"
/>

<Girlproduct
  src="https://m.media-amazon.com/images/I/81gCu9RW3pL.jpg"
  name="Unicorn Mini Backpack"
  brandname="LilBags"
  discount="40% Off"
  oldprice="₹999"
  currprice="₹599"
  delivery="Free Delivery"
/>

<Girlproduct
  src="https://i5.walmartimages.com/seo/Wowstyle-Flower-Headbands-For-Women-Hippie-Floral-Hairband-Boho-Fairy-Crown-Wedding-Parties-Outfit-Costume-Hair-Accessories_eb5c9bb5-f425-4438-a4f7-4459b894b95c.a9004358c55efd18eb006eb69437ac01.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF"
  name="Floral Hairband Set"
  brandname="PrettyKids"
  discount="20% Off"
  oldprice="₹299"
  currprice="₹239"
  delivery="Delivery Tomorrow"
/>

<Girlproduct
  src="https://media.gettyimages.com/id/1407088772/photo/cute-small-girl-with-sunglasses.jpg?s=612x612&w=0&k=20&c=HXGMxVnL0q8RRiJxipPS-fFQz-ZMHhlLMBk1q0nYOe8="
  name="Kids Stylish Sunglasses"
  brandname="SunBerries"
  discount="35% Off"
  oldprice="₹699"
  currprice="₹454"
  delivery="Free Delivery"
/>

<Girlproduct
  src="https://m.media-amazon.com/images/I/51k0lZy0vJL.jpg"
  name="Princess Doll Toy"
  brandname="ToyWorld"
  discount="30% Off"
  oldprice="₹899"
  currprice="₹629"
  delivery="Free Delivery"
/>

<Girlproduct
  src="https://i.etsystatic.com/24480679/r/il/97f848/4815539300/il_600x600.4815539300_18ld.jpg"
  name="Pink Comfortable Sandals"
  brandname="KidFoot"
  discount="25% Off"
  oldprice="₹799"
  currprice="₹599"
  delivery="Delivery in 3 days"
/>

<Girlproduct
  src="https://m.media-amazon.com/images/I/715QH0EVp2L.jpg"
  name="Cute Cartoon School Bag"
  brandname="EduKids"
  discount="40% Off"
  oldprice="₹1499"
  currprice="₹899"
  delivery="Free Delivery"
/>

<Girlproduct
  src="https://images-na.ssl-images-amazon.com/images/I/71yZCKlOAVL.jpg"
  name="women Jewelry Set"
  brandname="SparkleStar"
  discount="35% Off"
  oldprice="₹499"
  currprice="₹324"
  delivery="Delivery Tomorrow"
/>
</div>
</div>

            </div>
        </div>
    </>
  );
}

export default Girlproductmaindiv    
import React from 'react'
import Seasonal from './Seasonal'
import Trycard from './Trycard'

const Seasonalpromain = () => {
  const electronics = [
    { 
      src: "", 
      productname: "LOOKNBOOK ART Lehenga Choli", 
      discount: "30%", 
      price: "₹45,999", 
      oldprice: "₹65,999" 
    },
    { 
      src: "https://i.pinimg.com/originals/85/7b/e4/857be403d54c7fc14f54ceb5b4188817.jpg", 
      productname: "nike shoes", 
      discount: "20%",  
      price: "₹12,499",
      oldprice: "₹15,999"
    },
    { 
      src: "https://example.com/earbuds.jpg", 
      productname: "Earbuds", 
      discount: "15%",
      price: "₹799",
      oldprice: "₹1,099"
    },
    { 
      src: "https://example.com/tv.jpg", 
      productname: "TV", 
      discount: "25%",
      price: "₹22,999",
      oldprice: "₹30,999"
    },
  ];

  const fashion = [
    { src: "https://example.com/jacket.jpg", productname: "Jacket", discount: "50%", price: "₹999", oldprice: "₹1,999" },
    { src: "https://example.com/shoes.jpg", productname: "Shoes", discount: "30%", price: "₹1,299", oldprice: "₹1,899" },
    { src: "https://example.com/watch.jpg", productname: "Watch", discount: "20%", price: "₹699", oldprice: "₹999" },
    { src: "https://example.com/bag.jpg", productname: "Bag", discount: "40%", price: "₹599", oldprice: "₹999" },
  ];

  const kitchen = [
    { src: "https://images.meesho.com/images/products/617890237/okpaf_512.avif?width=200px", productname: "Mixer", discount: "45%", price: "₹1,499", oldprice: "₹2,499" },
    { src: "https://example.com/oven.jpg", productname: "Oven", discount: "25%", price: "₹3,499", oldprice: "₹4,699" },
    { src: "https://example.com/toaster.jpg", productname: "Toaster", discount: "30%", price: "₹899", oldprice: "₹1,299" },
    { src: "https://example.com/fridge.jpg", productname: "Fridge", discount: "10%", price: "₹18,999", oldprice: "₹20,999" },
  ];

  return (
    <div className='maindiv'>
      <Seasonal heading="Best Electronics Sale" products={electronics} />
      <Seasonal heading="Latest Fashion Deals" products={fashion} />
      <Trycard />
      <Seasonal heading="Kitchen Essentials Offer" products={kitchen} />
      <Trycard />
    </div>
  )
}

export default Seasonalpromain

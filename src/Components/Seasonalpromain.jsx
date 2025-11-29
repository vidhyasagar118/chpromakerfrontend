import React from 'react'
import Seasonal from './Seasonal'
import Trycard from './Trycard'

const Seasonalpromain = () => {
  const electronics = [
    { 
      src: "https://looknbookart.com/cdn/shop/files/purple-color-zari-weaving-work-with-shibori-printed-dola-silk-lehenga-choli-by-looknbook-art.jpg?v=1731908444&width=600", 
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
      src: "https://www.boat-lifestyle.com/cdn/shop/files/AD141-FI_Black06_600x.jpg?v=1722247855", 
      productname: " boat Earbuds", 
      discount: "15%",
      price: "₹799",
      oldprice: "₹1,099"
    },
    { 
      src: "https://media.istockphoto.com/id/482868934/vector/lcd-tv-monitor-with-broken-screen.jpg?s=612x612&w=0&k=20&c=i-BphBsVVYGRsWqAF0Nbc-BwTVZW3GvluG2zEntWUJI=", 
      productname: " lcd TV", 
      discount: "25%",
      price: "₹22,999",
      oldprice: "₹30,999"
    },
  ];

  const fashion = [
    { src: "https://i.pinimg.com/originals/b3/21/59/b32159c6cc4fb168d908b08ab4945a8d.jpg", productname: " addidas Jacket", discount: "50%", price: "₹999", oldprice: "₹1,999" },
    { src: "https://rukminim2.flixcart.com/image/300/300/xif0q/shoe/o/7/a/10-snk-eva-740-wht-blk-10-bruton-white-black-original-imahdmzbtt93hhrx.jpeg?q=90", productname: "sniker Shoes", discount: "30%", price: "₹1,299", oldprice: "₹1,899" },
    { src: "https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa931c91c/images/Sonata/Catalog/77105NM09W_1.jpg?sw=360&sh=360", productname: " sonata Watch", discount: "20%", price: "₹699", oldprice: "₹999" },
    { src: "https://cdn.pixabay.com/photo/2024/01/15/17/03/suitcase-8510536_640.jpg", productname: "suitacase", discount: "40%", price: "₹599", oldprice: "₹999" },
  ];

  const kitchen = [
    { src: "https://www.crompton.co.in/cdn/shop/files/DS500FrontOrthographicView.png?v=1694418327&width=533", productname: "Mixer", discount: "45%", price: "₹1,499", oldprice: "₹2,499" },
    { src: "https://img.freepik.com/free-photo/small-oven-white-background_1232-1349.jpg?semt=ais_incoming&w=740&q=80", productname: "Oven", discount: "25%", price: "₹3,499", oldprice: "₹4,699" },
    { src: "https://static.vecteezy.com/system/resources/thumbnails/051/975/091/small/a-modern-toaster-with-two-slices-of-golden-brown-bread-on-a-kitchen-counter-with-decorative-elements-free-photo.jpeg", productname: "Toaster", discount: "30%", price: "₹899", oldprice: "₹1,299" },
    { src: "https://www.shutterstock.com/image-vector/cartoon-fridge-vector-set-flat-260nw-2410473659.jpg", productname: "Fridge", discount: "10%", price: "₹18,999", oldprice: "₹20,999" },
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

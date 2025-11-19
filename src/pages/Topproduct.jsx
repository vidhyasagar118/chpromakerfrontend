import React from 'react'
import Topproductli from './Topproductli'
import "./topproduct.css";

const Topproduct = ({ title, products }) => {
    return (
        <div className='topproductmain'>
            <h2>{title}</h2>
            <div>
                <ul className='topproductul'>
                    {products.map((item, index) => (
                        <Topproductli 
                            key={index}
                            name={item.name}
                            src={item.src}
                            price={item.price}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Topproduct;

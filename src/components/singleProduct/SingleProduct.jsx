import React from 'react';
import "./SingleProduct.css";
const SingleProduct = (props) => {
    const {name,price,seller,ratings,img}=props.singleProduct;
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h3 className='product__name'>{name}</h3>
            <h5 className='product__price'>Price: {price}</h5>
            <h5 className='seller__name'>Manufucture: {seller}</h5>
            <p className='product__rating'>Rating: {ratings}</p>
            <button className='btn__card'>Add To Card</button>
        </div>
    );
};

export default SingleProduct;
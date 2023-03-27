import React from 'react';
import "./SingleProduct.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const SingleProduct = (props) => {
    const {name,price,seller,ratings,img}=props.singleProduct;
    const handleAddToCard=props.handleAddToCard;
  
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h3 className='product__name'>{name}</h3>
            <h5 className='product__price'>Price: {price}</h5>
            <h5 className='seller__name'>Manufucture: {seller}</h5>
            <p className='product__rating'>Rating: {ratings}</p>
            <button className='btn__card' onClick={()=>handleAddToCard(props.singleProduct)}>Add To Card <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default SingleProduct;
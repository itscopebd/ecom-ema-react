import React from 'react';
import "./SingleProduct.css";
const SingleProduct = (props) => {
    const {name,price,seller,ratings,img}=props.singleProduct;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default SingleProduct;
import React, { useEffect, useState } from 'react';
import SingleProduct from '../singleProduct/SingleProduct';
import "./Products.css"
const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
 
    return (
        <div>
            <div className="container">
                <div className="product__container">
                   {
                    products.slice(0,12).map(singleProduct=><SingleProduct singleProduct={singleProduct}key={singleProduct.id}></SingleProduct>)
                   }

                </div>
                <div className="card__container">
                    <p>Summary</p>
                </div>
            </div>
        </div>
    );
};

export default Products;
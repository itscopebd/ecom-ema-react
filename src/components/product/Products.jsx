import React, { useEffect, useState } from 'react';
import SingleProduct from '../singleProduct/SingleProduct';
import "./Products.css"

const Products = () => {
  
    const [products, setProducts] = useState([]);
    const [card,setCard]=useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCard=(Product)=>{
        const newCard=[...card,Product];
        setCard(newCard)

    }
    return (
        <div>
            <div className="container">
                <div className="product__container">
                   {
                    products.map(singleProduct=><SingleProduct singleProduct={singleProduct}key={singleProduct.id} handleAddToCard={handleAddToCard}></SingleProduct>)
                   }

                </div>
                <div className="card__container">
                    <p>Summary:{card.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Products;
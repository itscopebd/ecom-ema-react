import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Card from '../card/Card';
import SingleProduct from '../singleProduct/SingleProduct';
import "./Products.css";

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
        setCard(newCard);

        addToDb(Product.id);

    }

 useEffect(()=>{

const storedCard= getShoppingCart();
const saveCard=[]
 for (const id in storedCard) {

     let addedProduct=products.find(product=>product.id===id)
     
 if (addedProduct) {
    const addedquantity=storedCard[id];
    addedProduct.quantity=addedquantity;
    saveCard.push(addedProduct)
 }
}
setCard(saveCard)
},[products])


    return (
        <div>
            <div className="container">
                <div className="product__container">
                   {
                    products.map(singleProduct=><SingleProduct singleProduct={singleProduct}key={singleProduct.id} handleAddToCard={handleAddToCard}></SingleProduct>)
                   }

                </div>
                <div className="card__container">
                    <Card card={card}></Card>
                </div>
            </div>
        </div>
    );
};

export default Products;
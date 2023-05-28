import React from 'react';
import "./Card.css";
const Card = (props) => {
    const {card}=props;
   console.log(props);
    let total=0;
    let shipping=0;
    for (const price of card) {
       total=total+price.price;
       shipping=shipping+price.shipping
    }
    const tax=total*10/100;
  const grandTotal=total+shipping+tax;
    return (
        <div className='cardContainer'>
           <h3> Order Summary</h3>
           <p>Selected Items: {card.length} </p>
           <p>Total Price: ${total}</p>
           <p>Shipping: ${shipping}</p>
           <p>Tax: ${tax.toFixed(2)}</p>
           <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Card;
import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products =[
        {id: 1, name: 'realme', price: 15000},
        {id: 2, name: 'i-phone', price: 25000},
        {id: 1, name: 'oppo-pro-max', price: 35000},
    ]
    return (
        <div className="card-group">
            {
                products.map(product => <Card key={product.id} product={product}></Card>)
            }
        </div>
    );
};

export default CardGroup;
import React from 'react';
import SAMPLE_PRDDUCTS from '../../../constant/productData';
import { ProductCard } from '../Products/ProductCard';



export const Products = () => {
    return (

        <div className='w-50 m-auto '>
               <h3  className='text-light'>BUY YOUR FAVOURITE PRODUCTS</h3>
                        {SAMPLE_PRDDUCTS.map((item)=><ProductCard item={item}/>)}

        </div>
    )
}

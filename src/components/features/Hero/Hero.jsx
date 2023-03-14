import React from 'react'

// import {productSlice} from '../Products/productSlice';
import { useDispatch, useSelector } from 'react-redux';

import HeroCard from './HeroCard';

export const Hero = () => {
    const nuOfProducts = useSelector((state) => state.products.noOfProducts)
    const data = useSelector((state) => state.products.data)
    const dispatch = useDispatch()
    return (
        <div className='w-25 m-auto bg-dark my-4 text-light'>
            <h4>your shopping Cart</h4>
            {
                data.length !==0 ? 
                    data.map((item) => {
                        return <HeroCard item={item} />
                    })
                    :
                    'Empty Cart'
            }

        </div>
    )
}

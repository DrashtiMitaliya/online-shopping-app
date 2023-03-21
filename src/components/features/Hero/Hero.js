import React from 'react'
import {  useSelector } from 'react-redux';
import HeroCard from './HeroCard';

export const Hero = () => {

    const data = useSelector((state) => state.products.data)
    // code for display heade section and product card
    return (
        <div className='w-25 m-auto bg-dark my-4 text-light'>
            <h4>your shopping Cart</h4>
            {
                data.length !==0 ? 
                    data.map((item,index) => {
                        return <HeroCard key={index} item={item} />
                    })
                    :
                    'Empty Cart'
            }

        </div>
    )
}

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  useDispatch } from 'react-redux';
import { addCartItem } from './productSlice';

export const ProductCard = (props) => {
    const dispatch = useDispatch()
    const {id, title, price, description } = props.item
    return (
        <div>
            
            {/* A card that is being displayed on the page. */}
            <Card className='m-auto  mt-3' >
                <Card.Body className=' bg-light text-success'>
                    <div className="d-flex justify-content-between">
                        <Card.Title className='text-start '>{title}  </Card.Title>
                        <Card.Title className='text-end   '>${price}.00 </Card.Title>
                    </div>
                    <div className="d-flex justify-content-between mt-4 align-items-center">
                        <Card.Subtitle className="  text-start">{description}</Card.Subtitle>
                    </div>
                    <div className='text-end'>
                        <Button variant="outline-primary " onClick={() => dispatch(addCartItem({
                            id,
                            title,
                            price,
                            basePrice: price,
                            itemQuantity:1
                        }))}
                        >Add to Cart</Button>{' '}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

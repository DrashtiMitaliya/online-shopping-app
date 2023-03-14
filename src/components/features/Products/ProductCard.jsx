import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import SAMPLE_PRDDUCTS from '../../../constant/productData';
import { addCartItem } from './productSlice';




export const ProductCard = (props) => {
    const nuOfProducts = useSelector((state) => state.products.nuOfProducts)
    const dispatch = useDispatch()
    const {id, title, price, description } = props.item
    return (
        <div>
            <Card className='m-auto  mt-3' >
                <Card.Body className=' bg-light text-success'>
                    <div className="d-flex justify-content-between">
                        <Card.Title className='text-start '>{title}  </Card.Title>
                        <Card.Title className='text-end   '>{price} </Card.Title>
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

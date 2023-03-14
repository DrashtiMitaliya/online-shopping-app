import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { decrement, increment } from '../Products/productSlice';
import { useDispatch } from 'react-redux';
const HeroCard = (props) => {
    const {id,
        title,
        price,
        itemQuantity} = props.item
        const dispatch = useDispatch()
    return (
        <>
            <Card className='m-auto mt-3' >
                <Card.Body className=' bg-light text-success'>
                    <div className="d-flex justify-content-between">


                        <Card.Title className='text-start '> {title} </Card.Title>
                        <Card.Title className='text-end '> ${price}.00 </Card.Title>
                    </div>
                    <div className="d-flex justify-content-between mt-4 align-items-center">
                        <Card.Subtitle className="mt-4  text-start"> x {itemQuantity}</Card.Subtitle>

                        <div>
                            <Button variant="outline-success" onClick={() => dispatch(decrement({id}))}>-</Button>{' '}
                            <Button variant="outline-success" onClick={() => dispatch(increment({id}))} > +  </Button>{' '}
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </>
    )
}

export default HeroCard
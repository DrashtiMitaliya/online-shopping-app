
import React from 'react'
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';


export const Header = () => {
    const noOfProducts =useSelector((state)=>state.products.noOfProducts)
    let a=5
    return (
        <div >
            <Navbar bg="dark " expand="lg"  >
                <Container >
                    <Navbar.Brand href="#home" className='text-light' > My Online Shopping Site</Navbar.Brand>
                 
                    <Button variant="outline-success">My Cart {noOfProducts} </Button>{' '}
                </Container>
            </Navbar>
        </div>
    )
}

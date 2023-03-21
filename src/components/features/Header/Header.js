import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {  useSelector } from 'react-redux';

export const Header = () => {

    /* A hook which is used to get the state of the application. */
    const noOfProducts =useSelector((state)=>state.products.noOfProducts)
   
    return (
    /* A header component which is used to display the header of the application. */
        <div >
            <Navbar bg="dark " expand="lg"  >
                <Container >
                    <Navbar.Brand href="#home" className='text-light' > My Online Shopping Site</Navbar.Brand>
                    <Button variant="success" onClick={(prev=>!prev)}>My Cart {noOfProducts} </Button>{' '}
                </Container>
            </Navbar>
        </div>
    )
}

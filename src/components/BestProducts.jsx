import React from 'react'
import styled from 'styled-components'
import Products from './Products'
const BestProducts = () => {

    const data = [
        {
            id: 1,
            title: "Bluetooth Headphone",
            image: "https://rukminim2.flixcart.com/image/80/80/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=80 ",
            price: "Rs 1999"
        },
        {
            id: 2,
            title: "Boat Smart Watch",
            image: "https://rukminim2.flixcart.com/image/170/170/xif0q/smartwatch/q/v/q/-original-imagn53zhtyzh4tn.jpeg?q=80",
            price: "Rs 1999"
        },
        {
            id: 3,
            title: "Noice Smart Watch",
            image: "https://rukminim2.flixcart.com/flap/170/170/image/24ed491dc3ff9e8a.jpg?q=80",
            price: "Rs 1999"
        },

        {
            id: 4,
            title: "Mobile Speakers",
            image: "https://rukminim2.flixcart.com/image/170/170/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=80",
            price: "Rs 1999"
        },
        {
            id: 5,
            title: "Mirrorless Camera",
            image: "https://rukminim2.flixcart.com/image/170/170/xif0q/dslr-camera/i/o/c/eos-r100-24-1-eos-r100-kit-canon-original-imagqeydhsxgacxp.jpeg?q=80",
            price: "Rs 1999"
        },
        {
            id: 6,
            title: "Mirrorless Camera",
            image: "https://rukminim2.flixcart.com/image/170/170/xif0q/dslr-camera/i/o/c/eos-r100-24-1-eos-r100-kit-canon-original-imagqeydhsxgacxp.jpeg?q=80",
            price: "Rs 1999"
        },

    ]
    return (
        <Container>
            <Heading>
                Best Products
            </Heading>
            <ProductList>
                {data.map((item) => (
                    <Products key={item.id} item={item} />
                ))}
            </ProductList>

        </Container>

    )
}

export default BestProducts


const Container = styled.div`
display : flex;
flex-direction: column;

height : 100%;
width  :100%;
background-color: white;

`
const Heading = styled.h1`
font-size: 25px;
font-weight: bold;
margin: 10px;

`
const ProductList = styled.div`
display : flex;
height : 80%;
width : 100%;
align-items: center;
justify-content:center;
padding: 1px;
`

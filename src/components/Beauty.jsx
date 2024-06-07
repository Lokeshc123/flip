import React from 'react'
import styled from 'styled-components'
import Products from './Products'
const Beauty = () => {

    const data = [
        {
            id: 1,
            title: "String Instruments",
            image: "https://rukminim2.flixcart.com/image/340/340/acoustic-guitar/e/y/y/dd-380c-blk-jixing-original-imaeff94e9tczafp.jpeg?q=60",
            price: Math.floor(Math.random() * 1000) + 1
        },
        {
            id: 2,
            title: "Top Selling Stationary",
            image: "https://rukminim2.flixcart.com/image/340/340/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=60",
            price: Math.floor(Math.random() * 1000) + 1
        },
        {
            id: 3,
            title: "Muscial Keyboards",
            image: "https://rukminim2.flixcart.com/image/340/340/xif0q/musical-keyboard/8/e/e/37-0-4-piano-keyboard-toy-kids-with-mic-dc-power-option-original-imahyzyjmxdps7yz.jpeg?q=60",
            price: Math.floor(Math.random() * 1000) + 1
        },

        {
            id: 4,
            title: "Geared Cycle",
            image: "https://rukminim2.flixcart.com/image/170/170/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=90",
            price: Math.floor(Math.random() * 1000) + 1
        },
        {
            id: 5,
            title: "Food Spreads",
            image: "https://rukminim2.flixcart.com/image/170/170/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=90",
            price: Math.floor(Math.random() * 1000) + 1
        },
        {
            id: 6,
            title: "Soft Toys",
            image: "https://rukminim2.flixcart.com/image/170/170/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=90",
            price: Math.floor(Math.random() * 1000) + 1
        },

    ]
    return (
        <Container>
            <Heading>
                Beauty, Foods , Toys & More
            </Heading>
            <ProductList>
                {data.map((item) => (
                    <Products key={item.id} item={item} />
                ))}
            </ProductList>

        </Container>

    )
}

export default Beauty


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

import React from 'react'
import styled from 'styled-components'
const PartP = ({ item }) => {
    return (
        <Container>
            <Image src={item.image} alt="product" />
            <Text>{item.title}</Text>
            <TextPrice>Starting from : {item.price}</TextPrice>
        </Container>

    )
}

export default PartP

const Container = styled.div`
height : 99%;
width : 48%;
display : flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 12px;
border: 1px solid black;
margin-right : 10px;
`

const Image = styled.img`
height : 40%;
width : 100%;
object-fit: contain;

`
const Text = styled.p`
font-size: 14px;
font-weight: bold;
`
const TextPrice = styled.p`
font-size: 12px;
font-weight: bold;
color: green;
`


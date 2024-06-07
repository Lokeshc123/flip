import React from 'react'
import styled from 'styled-components'
const CatIcons = ({ item }) => {
    return (
        <Container>
            <Image src={item.image} alt="category" />
            <Text>{item.title}</Text>
        </Container>

    )
}

export default CatIcons


const Container = styled.div`
display : flex;
flex-direction: column;
align-items: center;
height : 95%;
width : 130px;
margin-right : 20px;
cursor : pointer;
justify-content: center;

`
const Image = styled.img`
height : 55px;
width : 60px;
object-fit: contain;

`
const Text = styled.p`
font-size: 14px;
font-weight: bold;
`

import React from 'react'
import styled from 'styled-components'
import CatIcons from './CatIcons'
const Categories = () => {
    const data = [{
        id: 1,
        title: "Grocery",
        image: "https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
    },
    {
        id: 2,
        title: "Mobiles",
        image: "https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100"

    },
    {
        id: 3,
        title: "Fashion",
        image: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100"
    }, {
        id: 4,
        title: "Electronics",
        image: "https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100"
    }, {
        id: 5,
        title: "Home & Furniture",
        image: "https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100"
    }, {
        id: 6,
        title: "Appliances",
        image: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100"
    }, {
        id: 7,
        title: "Travel",
        image: "https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100"
    }, {
        id: 8,
        title: "Beauty, Toys ",
        image: "https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
    }, {
        id: 9,
        title: "Two Wheelers",
        image: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100"
    }

    ]
    return (
        <Container>
            {data.map((item) => (
                <CatIcons key={item.id} item={item} />
            ))
            }
        </Container>
    )
}

export default Categories

const Container = styled.div`
height : 15%;
width : 99%;
margin-top : 10px;
display : flex;
align-self: center;
justify-content: center;
align-items: center;
background-color: #fff;
`
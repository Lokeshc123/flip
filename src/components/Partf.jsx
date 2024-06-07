import React from 'react';
import styled from 'styled-components';
import Products from './Products'; // Adjust the import path based on your project structure
import PartP from './PartP';

const data = [
    {
        id: 1,
        title: "Trimmer",
        image: "https://satyakkamkitchenwarre.com/wp-content/uploads/2023/11/BPL-BBTD0013C-Beard-Trimmer-491903183-i-1-1200Wx1200H.jpg",
        price: "$25" // Added price for displaying
    },
    {
        id: 2,
        title: "Sun glasses",
        image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
        price: "$50"
    },
    {
        id: 3,
        title: "Watches",
        image: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        price: "$150"
    },
    {
        id: 4,
        title: "Shoes",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
        price: "$75"
    }
];

const Partf = () => {
    return (
        <Container>
            <Heading>Top Section</Heading>
            <Rowf>
                {data.slice(0, 2).map((item) => (
                    <PartP key={item.id} item={item} />
                ))}
            </Rowf>

        </Container>
    );
};

export default Partf;

const Container = styled.div`
height : 99%;
width : 33%;
display : flex;
flex-direction: column;

border-radius: 12px;
border: 1px solid black;
margin-right : 10px;
`

const Heading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
`;


const Rowf = styled.div`
display : flex;
height : 40%;
width : 100%;
justify-content: center;
align-items: center;
`;
import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import BestProducts from '../components/BestProducts';
import Beauty from '../components/Beauty';
import Footer from '../components/Footer'; // Import the Footer component

const Home = () => {
    return (
        <Container>
            <Top>
                <Navbar />
            </Top>
            <Categories />
            <Carousel />
            <Partners>
                <BestProducts />
            </Partners>
            <BeautyContainer>
                <Beauty />
            </BeautyContainer>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </Container>
    );
};

export default Home;

const Container = styled.div`
    width: 100vw;
    display: flex;
    background-color: #f5f5f5;
    flex-direction: column;
    align-items: center;
`;

const Top = styled.div`
    height: 7%;
    width: 100%;
    background-color: #fff;
`;

const Partners = styled.div`
    height: 45vh;
    width: 99%;
    margin-top: 10px;
    display: flex;
    align-self: center;
`;

const BeautyContainer = styled.div`
    height: 45vh;
    width: 99%;
    margin-top: 10px;
    display: flex;
    align-self: center;
`;

const FooterContainer = styled.div`
    width: 100%;
    background-color: black;
    color: white;
`;

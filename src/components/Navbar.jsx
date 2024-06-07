import React from 'react'
import styled from 'styled-components'
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
const Navbar = () => {
    return (
        <Container>
            <Image src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="logo" />
            <Search >
                <IoSearch size={22} style={{ marginLeft: 10 }} />
                <SearchInput type="text" placeholder="Search for products, brands and more" />
            </Search>
            <ButtonRow>
                <ButtonContainer>
                    <FaRegUserCircle size={22} style={{ marginRight: 10 }} />
                    <Text>Login</Text>
                </ButtonContainer>
                <ButtonContainer>
                    <BsCart size={22} style={{ marginRight: 10 }} />
                    <Text>Cart</Text>
                </ButtonContainer>
                <ButtonContainer>
                    <CiShop size={25} style={{ marginRight: 10 }} />
                    <Text>Become a Seller</Text>
                </ButtonContainer>
            </ButtonRow>
            <BsThreeDotsVertical size={22} style={{ marginLeft: 20, alignSelf: "center" }} />
        </Container>
    )
}

export default Navbar

const Container = styled.div`
    height : 100%;
    width : 100%;
   flex-direction: row;
   
   display : flex;
    
`
const Image = styled.img`
    height : 100%;
    width : 18%;
    object-fit: contain;
    
`
const Search = styled.div`
   height : 90%;
    width : 40%;
    border-radius: 16px;
    display : flex;
    /* justify-content: center; */
    align-items: center;
   
    margin-left : 10px;
    
   
    background-color :#f0f5ff;

`

const SearchInput = styled.input`
    border : none;
    outline : none;
    background-color :#f0f5ff;
    height : 50%;
    margin-left : 10px;
    width : 100%;
    font-size: 20px;

`
const ButtonRow = styled.div`
    height : 100%;
    width : 35%;
    display : flex;
    justify-content: space-between;
    align-items: center;
    margin-right : 10px;
`
const ButtonContainer = styled.div`
    height : 80%;
    width : 200px;
    display : flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
  
    cursor : pointer;
`
const Text = styled.p`
    font-size: 20px;
   
`

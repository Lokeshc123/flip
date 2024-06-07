import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterText>© 2024 Your Company. All Rights Reserved.</FooterText>
                <FooterLinks>
                    <FooterLink href="#">Privacy Policy</FooterLink>
                    <FooterLink href="#">Terms of Service</FooterLink>
                    <FooterLink href="#">Contact Us</FooterLink>
                </FooterLinks>
            </FooterContent>
        </FooterWrapper>
    );
};

export default Footer;

const FooterWrapper = styled.footer`
    width: 100%;
    background-color: black;
    color: white;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FooterContent = styled.div`
    width: 90%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const FooterText = styled.p`
    margin: 10px 0;
    font-size: 14px;
`;

const FooterLinks = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 10px;
`;

const FooterLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 14px;
    &:hover {
        text-decoration: underline;
    }
`;

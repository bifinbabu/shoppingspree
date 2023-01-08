import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;

`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px; 
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
`
const ListItem = styled.li`

`
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ShoppingSpree</Logo>
        <Desc>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest />
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men's fashion</ListItem>
            <ListItem>Women's fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;

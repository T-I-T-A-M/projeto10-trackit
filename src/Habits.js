import React from "react"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import { useContext } from "react";
import UserCredentials from "./contexts/UserCredentials"

export default function Habits(){

    const { userCredentials, setUserCredentials } = useContext(UserCredentials)

    

    return(
        <>
        <Header />

        <Container>













        </Container>
        <Footer />
        </>
    )
}


const Container =styled.div`
background-color: #F2F2F2;
width:100%;
height: 3500px;

`





import React from "react"
import styled from "styled-components"
import { useContext } from "react";
import UserCredentials from "./contexts/UserCredentials"
import { Link } from "react-router-dom"


export default function Header(){

    
    const { userCredentials} = useContext(UserCredentials)
    
   
    


    
    return (
        <Component>
            <Link to ="/" style={{ textDecoration: 'none' }}>
            <AppName>
            TrackIt
            </AppName>
            </Link>

            <ProfileImage src={userCredentials.image}></ProfileImage>


        </Component>

        
    )


}


const Component = styled.div`
position:sticky;
top:0px;
padding: 9px 18px 10px 18px;
height: 70px;
background-color: #126BA5;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
display:flex;
justify-content: space-between;
align-items: center;
`

const AppName=styled.h1`
font-family: 'Playball', ncursive;
color: #FFFFFF;
font-size: 39px;
cursor:default;
`

const ProfileImage=styled.img`
border-radius: 80px;
width:51px;
height:51px;

`
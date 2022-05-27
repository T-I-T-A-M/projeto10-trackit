import React, { UserContext } from "react"
import styled from "styled-components"
import UserToken from "./contexts/UserToken";

export default function Header(){


    return (
        <Component>
            <AppName>
            TrackIt
            </AppName>

            <ProfileImage></ProfileImage>


        </Component>

        
    )


}


const Component = styled.div`
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

`
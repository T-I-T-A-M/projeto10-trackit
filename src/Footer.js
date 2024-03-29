import React  from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"


export default function Footer(){



    return (
        <>
        <Container>
            <Link to ="/habitos" style={{ textDecoration: 'none' }}>
                <HabitsButton>
                    Hábitos
                </HabitsButton>
            </Link>

            <Link to="/hoje" style={{ textDecoration: 'none' }}>
            <p> Coisa de tracking</p>
            </Link>

            <Link to="/historico" style={{ textDecoration: 'none' }}>
                <HistoryButton>
                    Histórico
                </HistoryButton>
            </Link>



        </Container>
        
        </>
    )


}


const Container = styled.div`
width:100%;
height:70px;
background-color: #FFFFFF;
display:flex;
align-items: center;
justify-content: space-around;
position: sticky;
bottom:0px;
`

const HabitsButton = styled.div `
color:#52B6FF;
font-weight: 400;

`

const HistoryButton = styled.div `
color:#52B6FF;
font-weight: 400;
`

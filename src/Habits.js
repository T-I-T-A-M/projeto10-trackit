import React from "react"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import { useContext, useState } from "react";
import UserCredentials from "./contexts/UserCredentials"
import CreateNewHabit from "./CreateNewHabit"

export default function Habits(){

    const { userCredentials, setUserCredentials } = useContext(UserCredentials)

    const [userHabits, setUserHabits] = useState(userCredentials.habits)
    const [showCreateNewHabit,setShowCreateNewHabit] =useState(false)
    
    function RenderShowNewHabits () {
        if (showCreateNewHabit) {
            return <CreateNewHabit setShowCreateNewHabit={setShowCreateNewHabit}></CreateNewHabit>
        }
        return ""
    }


     function RenderHabits () {

         if (userHabits.length > 0) {
             return 
             <NoHabits> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear</NoHabits>
         }
     }
    

    return(
        <>
        <Header />
        <Container>
            <Menu>
            <MyHabitsText>Meus Hábitos</MyHabitsText>
            <AddNewHabitButton onClick={() => setShowCreateNewHabit(true)}>+</AddNewHabitButton>
            </Menu>

            <RenderShowNewHabits>
            </RenderShowNewHabits>

            <ListHabits>
            <NoHabits> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear</NoHabits>

            </ListHabits>
            




        </Container>
        <Footer />
        </>
    )
}


const Container =styled.div`
background-color: #F2F2F2;
width:100%;
height: 3500px;
padding-right: 20px;
padding-left: 20px;
box-sizing: border-box;

`

const Menu = styled.div`
box-sizing: border-box;
width:100%;
height: 70px;
display:flex;
justify-content: space-between;
align-items: center;
padding-top: 20px;
`

const MyHabitsText = styled.h1`
color: #126BA5;
font-weight: bolder;

`

const AddNewHabitButton = styled.div `
display:flex;
justify-content: center;
align-items: center;
border-radius: 4.7px;
font-size:24px;
font-weight: bolder;
background-color: #52B6FF;
color: #FFFFFF;
width:40px;
height:35px;
`

const ListHabits = styled.div `
display:flex;
flex-direction: column;
justify-items: center;
align-items: center;
`

const NoHabits = styled.div `
display:flex;
align-items: center;
justify-content: flex-start;
padding-top:20px;
`



import React, { useContext, useState, useEffect }from "react"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import UserCredentials from "./contexts/UserCredentials"
import CreateNewHabit from "./CreateNewHabit"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function Habits(){

    const { userCredentials } = useContext(UserCredentials)
    const [userHabits, setUserHabits] = useState()
    const [showCreateNewHabit,setShowCreateNewHabit] =useState(false)
    const nav = useNavigate()
    const API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

    
    const config = {
        headers: {
            Authorization: `Bearer ${userCredentials.token}`
        }
    }
    
    function HandleError(){
        nav("/")
    }
    
    

    function GetHabits (){
        
        
         useEffect ( () =>{

         const promise = axios.get(API, config)

        promise.then(
            response => {
                setUserHabits(response.data)},
                RenderHabits()
                )

        promise.catch(() => HandleError())
            }, [])

    }


    


     function RenderHabits () {


        if (userHabits) {

            return (
                userHabits.map( (props) => 
                <Habit
                id={props.id}
                key={props.id}
                name={props.name}
                days={props.days}
                >{props.name}
                {BuildWeekdayBoxes(props.days)}
                {<img src="Images/Lixo.png" alt="lixudo"
                onClick = { () => DeleteHabit(props.id)}
                
                />}
                
                </Habit>

                )
            )


            function BuildWeekdayBoxes (choosenWeekday) {
            
            const days = ["D","S","T","Q","Q","S","S"]

            return (
            <WeekdayBoxes>

            {days.map( (day,index) =>
            <WeekdayBox
            key={index}
            day={day}
            color={choosenWeekday.includes(index) ? "#FFFFFF" : "#CFCFCF"}
            backgroundColor={choosenWeekday.includes(index) ? "#CFCFCF" : "#FFFFFF"}
            >{day}</WeekdayBox>
            )}
           
            </WeekdayBoxes>

            )
        }

        }
        else {
            return(" Você não tem nenhum hábito")
        }
     }

 
     function DeleteHabit (HabitId) {

        const APIDelete = API+"/"+HabitId

        console.log("deletando...")
        console.log(APIDelete)

        const delPromise = axios.delete(APIDelete,config)
        
        delPromise.then( (response) => 
        console.log(response),
        RenderHabits() )


        delPromise.catch( () => alert("Não foi possivel deletar hábito"))



     }

  
     function RenderShowNewHabits () {
        if (showCreateNewHabit) {
            return (<CreateNewHabit setShowCreateNewHabit={setShowCreateNewHabit}></CreateNewHabit>)
        }
        return ""
    }

    GetHabits()

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
            {RenderHabits()}
            </ListHabits>
            




        </Container>
        <Footer />
        </>
    )
}


const Container =styled.div`
background-color: #F2F2F2;
width:100%;
height: 667px;
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

/* const NoHabits = styled.div `
display:flex;
align-items: center;
justify-content: flex-start;
padding-top:20px;
` */

const Habit = styled.div`
background-color: #FFFFFF;
width: 340px;
height:91px;
`

const WeekdayBoxes = styled.div`
width:210px;
height:30px;
display:flex;
justify-content: space-between;
align-items: center;
`



const WeekdayBox = styled.div`
box-sizing: border-box;
display:flex;
justify-content: center;
width:24px;
align-items: center;
padding: 2px 3px 2px 4px;
border:solid 1px #D4D4D4;
border-radius:5px;
color: ${ (props) => props.color  };
background-color: ${ (props) =>  props.backgroundColor };
`
import React, { useContext, useState, useEffect }from "react"
import styled from "styled-components";
import UserCredentials from "./contexts/UserCredentials"
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom"
import CardHabitToday from "./CardHabitToday"
import { ThreeDots } from "react-loader-spinner"


export default function Today(){

    const [todayHabits, setTodayHabits]= useState(null)
    const { userCredentials } = useContext(UserCredentials)
    const API="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"


    const [refreshCards, setRefreshCards] = useState(false);
    const nav = useNavigate()

    
    const config = {
        headers: {
            Authorization: `Bearer ${userCredentials.token}`
        }
    }

    
    function HandleSessionError(){
        alert ("Sua sessão experiou")
        nav("/")
    }

        useEffect ( () =>{

            const promise = axios.get(API, config)
   
           promise.then(
               (response) => {
                   setTodayHabits(response.data)},
                   console.log(todayHabits)
                   )
   
           promise.catch(() => HandleSessionError())
               }, [refreshCards])
    
               



return (
<>
<Header></Header>

<Container>
    <Menu>
        <TodayText>
        Segundou
        </TodayText>
        <CompletionText>
        quantos hábitos ?
        </CompletionText>

        {todayHabits===null ? (
            <Loading>
                <ThreeDots color= "#52b6ff" height={40} width={40}/>
            </Loading>
        ): (
        todayHabits.map((CardToday,index) =>
            <CardHabitToday>
                key={index}
                id={CardToday.id}
                name={CardToday.name}
                done={CardToday.done}
                currentSequence={CardToday.currentSequence}
                highestSequence={CardToday.highestSequence}
                config={config}
                refreshCards={refreshCards}
                setRefreshCards={setRefreshCards}
            </CardHabitToday>
        ))}

    </Menu>



</Container>

<Footer></Footer>

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

const TodayText = styled.h1`
color: #126BA5;
font-weight: bolder;
`

const Menu = styled.div`
box-sizing: border-box;
width:100%;
height: 70px;
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding-top: 20px;
`

const CompletionText = styled.div `
color: #126BA5;

`
const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 20px;
`;
import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import UserCredentials from "./contexts/UserCredentials"
import axios from "axios";



export default function CreateNewHabit ({setShowCreateNewHabit}) {

    const [choosenWeekday, setChoosenWeekday] =useState([])
    const [newHabitName, setNewHabitName] = useState("")
 
    const { userCredentials } = useContext(UserCredentials)
    const API  = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const token = userCredentials.token

    const days= ["D","S","T","Q","Q","S","S"]

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const body = {
        name:  newHabitName,
        days:  choosenWeekday
    }

    console.log("Reredenderizei os create newHabit")

    function NewHabit () {
    
    
    const promise = axios.post(API, body, config)

    promise.then(() => {setShowCreateNewHabit(false)})

    promise.catch( () => {alert("Não foi possível cadastrar o hábito")})


    }

    function SelectDay (day) {

        if (choosenWeekday.find (element =>element===day)){
            const array = choosenWeekday.filter(element => element !==day)

            return setChoosenWeekday(array)
        }
        else
        setChoosenWeekday([...choosenWeekday,day])
    }





    const BuildWeekdayBoxes = days.map( (days,index) =>
    <WeekdayBox
    key={index}
    id={index}
    day={days}
    color={choosenWeekday.includes(index) ? "#FFFFFF" : "#CFCFCF"}
    backgroundColor={choosenWeekday.includes(index) ? "#CFCFCF" : "#FFFFFF"}
    onClick={() => SelectDay(index)}
    >{days}</WeekdayBox>
)











    return (

        <form>
        <Container>
            
            <NewHabitNameInput 
            required
            type = "text"
            value={newHabitName}
            placeholder="nome do hábito" 
            onChange={
                    e=> setNewHabitName(e.target.value)}>

            </NewHabitNameInput>

            <ChooseWeekdayBox>

                {BuildWeekdayBoxes}

            </ChooseWeekdayBox>
            
            <SaveorCancelBox>
                <Cancel onClick={() => setShowCreateNewHabit(false)}>Cancelar</Cancel>
                <Save onClick = {() => NewHabit() }>Salvar</Save>
            </SaveorCancelBox>


        </Container>
        </form>



    )
}


const Container =styled.div `
background-color: #FFFFFF;
display:flex;
flex-direction: column;
box-sizing: border-box;
border-radius: 5px;
padding:10px;
`


const NewHabitNameInput = styled.input`
width:100%;
box-sizing: border-box;
height:45px;
padding:8px;
border: solid 1px #D4D4D4;
border-radius:5px;
display:flex;
flex-wrap: wrap;
`
const ChooseWeekdayBox = styled.div`
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


const SaveorCancelBox = styled.div `
display:flex;
position:relative;
width:100%;
justify-content:flex-end;
align-items: center;
`

const Cancel = styled.div`
display:flex;
align-items: center;
justify-content: center;
border: solid 1px #DBDBDB;
border-radius: 5px;
background-color: #FFFFFF;
width:78px;
height:32px;
margin:8px;
`

const Save = styled.div`
display:flex;
align-items: center;
justify-content: center;
border: solid 1px #DBDBDB;
border-radius: 5px;
margin:8px;
background-color: #52B6FF;
width:78px;
height:32px;
`
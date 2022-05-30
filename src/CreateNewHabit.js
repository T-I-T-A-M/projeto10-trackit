import React, {useState} from "react";
import styled from "styled-components";
import WeekdayBoxes from "./WeekdayBoxes";
import UserCredentials from "./contexts/UserCredentials"


export default function CreateNewHabit ({setShowCreateNewHabit}) {

    const [selectedWeekday,setSelectedWeekday] = useState(false)
    const [choosenWeekday, setChoosenWeekday] =useState([])
    const [NewHabitName, setNewHabitName] = useState("")



    console.log(choosenWeekday)


    return (
        <Container>
            
            <NewHabitNameInput 
            placeholder="nome do hábito" 
            onChange={
                    e=> setNewHabitName(e.target.value)}>

            </NewHabitNameInput>

            <ChooseWeekdayBox>

                <WeekdayBoxes
                setChoosenWeekday={setChoosenWeekday}
                />

            </ChooseWeekdayBox>
            
            <SaveorCancelBox>
                <Cancel onClick={() => setShowCreateNewHabit(false)}>Cancelar</Cancel>
                <Save>Salvar</Save>
            </SaveorCancelBox>


        </Container>




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
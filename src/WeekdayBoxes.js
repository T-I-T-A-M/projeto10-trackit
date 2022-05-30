import styled from "styled-components"
import React, {useState} from "react"





export default function WeekdayBoxes ( { setChoosenWeekday }) {

    const [selectedIdDays, setSelectedIdDays] =useState([])
    const [days, setDays] = useState(["D","S","T","Q","Q","S","S"])


    function SelectDay (index) {

        if (selectedIdDays.includes(index)){
            setSelectedIdDays( selectedIdDays.filter( element => element !== index) )
        }
        else {
            setSelectedIdDays([...selectedIdDays,index])}
        
            setChoosenWeekday=selectedIdDays
            console.log(setChoosenWeekday)
    }


    


const BuildWeekdayBoxes = days.map( (days,index) =>
            <Main
            key={index}
            id={index}
            day={days}
            color={selectedIdDays.includes(index) ? "#FFFFFF" : "#CFCFCF"}
            backgroundColor={selectedIdDays.includes(index) ? "#CFCFCF" : "#FFFFFF"}
            onClick={() => SelectDay(index)}
            >{days}</Main>
        )

     




return (
    <>

    {BuildWeekdayBoxes}

    </>

)

}




const Main = styled.div`
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
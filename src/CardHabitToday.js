import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import checkIcon from "./assets/checkIcon.svg"

export default function CardHabitToday({
    id,
    name,
    done,
    currentSequence,
    highestSequence,
    config,
    refreshCards,
    setRefreshCards
}){
    

    const URLDone = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const URLNotDone = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;

    const [loading, setLoading] = useState(false);

    function CardNotDone (event) {
        event.preventDefault();
        setLoading(!loading)

        const promise=axios.post(URLNotDone, config)
        promise.then ( () => {
            setRefreshCards(!refreshCards)
        })

        promise.catch(() => console.log("erro"))
    }

    function CardDone (event) {
        event.preventDefault();
        setLoading(!loading)
        const promise = axios.post(URLDone, config);
        promise.then (() =>
            {setRefreshCards(!refreshCards)})

        promise.catch(() => console.log("erro"))
    }


    return (
        <>
  
        <CardHabitTodayClass>
        <Container>
          
          <div>
            <span>
            <HabitName>{name}</HabitName>
            </span>
            <span>
              <p>Sequência atual: </p>
              <Paragraph color={done ? '#8FC549' : '#666666'}>
                {currentSequence} dias
              </Paragraph>
            </span>
            <span>
              <p>Seu recorde: </p>
              <Paragraph
                color={
                  highestSequence !== 0 && highestSequence >= currentSequence
                    ? '#8FC549'
                    : '#666666'
                }
              >
                {highestSequence} dias
              </Paragraph>
            </span>
          </div>
        </Container>

          <CheckBox onClick={done ? CardNotDone : CardDone} background={done ? '#8FC549' : '#ebebeb'}>
            {loading ? (
              <ContainerLoading>
                <ThreeDots color="white" height={40} width={40} />
              </ContainerLoading>
            ) : (
              <img src={checkIcon} alt="CheckIcon" />
            )}
          </CheckBox>
        </CardHabitTodayClass>
        </>


    )

}



const CardHabitTodayClass = styled.div`
  background-color: white;
  padding: 13px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 94px;
  width: 340px;
  margin-bottom: 10px;
`;

const HabitName = styled.h3 `
color: #666666;
font-size: 20px;
font-family: Lexend Deca;

`



const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Paragraph = styled.p`
  margin-top: 2px;
  font-size: 13px;
  margin-right: 3px;
  color: ${props => props.color};
`;

const CheckBox = styled.button`
  font-size: 69px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.background};
  border-radius: 5px;
  min-width: 69px;
  height: 69px;
  border: none;
`;

const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 20px;
`;
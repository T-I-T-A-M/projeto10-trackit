import React, { useState, useContext } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserCredentials from "./contexts/UserCredentials";




export default function Home() {

    const [email, setEmail]= useState("picles@picles.com")
    const [password, setPassword] =useState("picles")
    const [disabled, setDisabled] =useState(false)
    const API="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const nav = useNavigate()
    const { setUserCredentials } = useContext(UserCredentials)

    function DisableButtons () {
        setDisabled(!disabled)
    }


            function DoLogin () {
            DisableButtons()


            const body = {
                email:email,
                password:password
            }

            const promise = axios.post(API,body)

                promise.then(SucessLogin)
                promise.catch(ErrorLogin)


                function SucessLogin (request){
                    
                    setUserCredentials({
                        email:request.data.email,
                        id:request.data.id,
                        image:request.data.image,
                        password:request.data.password,
                        token:request.data.token }                  
                    )

                    nav("/habitos")
                }

                function ErrorLogin (request) {
                    const statusCode= request.response.data
                    DisableButtons()
                    if (statusCode===422){
                        alert("Insira um usuário ou senha corretos")
                    }

                
            }
        
}


    return (

        <Container> 
            <LogoImg>
            </LogoImg>

            <AppName>
            TrackIt
            </AppName>

            <LoginForm onSubmit={DoLogin}>

                <LoginEmail 
                type ="email"
                placeholder="email"
                required
                disabled={disabled}
                value="picles@picles.com"
                onChange={
                    (e)=> setEmail(e.target.value)
                }
                
                >
                </LoginEmail>

                <LoginPassword 
                placeholder="senha"
                required
                disabled={disabled}
                value="picles"
                onChange={
                    (e)=> setPassword(e.target.value)
                }
                
                ></LoginPassword>

                <LoginAcessButton onClick= {() => DoLogin()}>Entrar
                </LoginAcessButton>
                
                
            </LoginForm>
            
            <Link to={"/cadastro"}>
            <RegisterNewAccount>Não tem uma conta? Cadastre-se</RegisterNewAccount>
            </Link>





        </Container>



    )

    


}


const Container = styled.div `
width: 100%;
height: 100%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const LogoImg = styled.div `
width:340px;
height: 240px;
`

const AppName=styled.h1`
font-family: 'Playball', ncursive;
color: #126BA5;
font-size: 69px;
cursor:default;
`

const LoginForm= styled.form`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const LoginEmail=styled.input `
width: 303px;
height: 45px;
border: 1px solid #D5D5D5;
margin-bottom: 3px;
border-radius: 5px;
padding-left: 6px;
background-color: ${props => props.disabled ? "#F2F2F2" : "#FFFFFF" };

::placeholder {
    color: #DBDBDB;
}

`

const LoginPassword=styled.input `
width: 303px;
height: 45px;
border: 1px solid #D5D5D5;
margin: 3px 3px;
border-radius: 5px;
padding-left: 6px;background-color: ${props => props.disabled ? "#F2F2F2" : "#FFFFFF" };


::placeholder {
    color: #DBDBDB;
}
`

const LoginAcessButton =styled.div`
width:303px;
height: 45px;
background-color: #52B6FF;
color: #FFFFFF;
display:flex;
align-items: center;
justify-content: center;
border-radius: 5px;
margin-bottom: 3px;
cursor:pointer;
user-select: none;

&:hover{
    opacity:0.85;
}
`

const RegisterNewAccount =styled.div`
text-decoration: underline;
color:  #52B6FF;
margin-top: 3px;
cursor:pointer;
user-select: none;

&:hover{
    opacity:0.85;
}
`

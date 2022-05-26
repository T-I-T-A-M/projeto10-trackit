import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom";


export default function Register(){
    
    const [registerEmail,setRegisterEmail] =useState("")
    const [registerPassword,setRegisterPassword] =useState("")
    const [registerName, setRegisterName]=useState("")
    const [registerPhoto, setRegisterPhoto]=useState("")
    const [disabled, setDisabled] =useState(false)
    const API="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
    

    function DisableButtons () {
        setDisabled(!disabled)
    }


    function DoRegister (event) {

        console.log("registrando")
        DisableButtons()

        const RegisterData = {
            email: registerEmail,
            name: registerName,
            image: registerPhoto,
            password: registerPassword
        }

        const promise = axios.post(API,
            RegisterData
            )

            promise.then(ResolveSucess)
            
            function ResolveSucess(request){
                const statusCode= request.status
                alert("Usuario Cadastrado com Sucess")
                DisableButtons()
            }

            promise.catch(ResolveError)

            function ResolveError(request){
                const statusCode=request.response.status
                alert("Nao deu certo vc é cabeçudo")

                DisableButtons()
                
            }


    }


    return (
        <Container>
            <LogoImg>
            </LogoImg>

            <AppName>
            TrackIt
            </AppName>

            <RegisterForm onSubmit={DoRegister}>
                <RegisterEmail 
                placeholder="email"
                type ="email"
                value={registerEmail}
                required
                disabled={disabled}
                onChange={
                    e=> setRegisterEmail(e.target.value)}
                
                
                />

                <RegisterPassword
                placeholder="senha"
                required
                disabled={disabled}
                value={registerPassword}
                onChange={
                    e=> setRegisterPassword(e.target.value)}
                
                
                />

                <RegisterName
                placeholder="nome"
                required
                disabled={disabled}
                value={registerName}
                onChange={
                    e=> setRegisterName(e.target.value)}

                
                ></RegisterName>

                <RegisterPhoto
                placeholder="foto"
                required
                disabled={disabled}
                value={registerPhoto}
                onChange={
                    e=> setRegisterPhoto(e.target.value)}
                    
                ></RegisterPhoto>

                <CreateAccountButton 
                type ="submit"
                disabled={disabled}
                onClick={ () => DoRegister()}
                
                >Cadastrar</CreateAccountButton>

            </RegisterForm>

            <Link to={"/"}>
            <AlreadyHaveAccountButton>Já tem uma conta? Faça login!</AlreadyHaveAccountButton>
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

const RegisterForm=styled.form`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const RegisterEmail=styled.input `
width: 303px;
height: 45px;
border: 1px solid #D5D5D5;
margin-bottom: 3px;
border-radius: 5px;
padding-left: 6px;
user-select:none;
background-color: ${props => props.disabled ? "#F2F2F2" : "#FFFFFF" };

::placeholder {
    color: #DBDBDB;
}

`

const RegisterPassword=styled.input `
width: 303px;
height: 45px;
border: 1px solid #D5D5D5;
margin: 3px 3px;
border-radius: 5px;
padding-left: 6px;
background-color: ${props => props.disabled ? "#F2F2F2" : "#FFFFFF" };
::placeholder {
    color: #DBDBDB;
}
`

const RegisterName=styled.input `
width: 303px;
height: 45px;
border: 1px solid #D5D5D5;
margin: 3px 3px;
border-radius: 5px;
padding-left: 6px;
background-color: ${props => props.disabled ? "#F2F2F2" : "#FFFFFF" };
::placeholder {
    color: #DBDBDB;
}
`
const RegisterPhoto=styled.input `
width: 303px;
height: 45px;
border: 1px solid #D5D5D5;
margin: 3px 3px;
border-radius: 5px;
padding-left: 6px;
background-color: ${props => props.disabled ? "#F2F2F2" : "#FFFFFF" };
::placeholder {
    color: #DBDBDB;
}
`

const CreateAccountButton =styled.div`
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

const AlreadyHaveAccountButton =styled.div`
text-decoration: underline;
color:  #52B6FF;
margin-top: 3px;
cursor:pointer;
user-select: none;

&:hover{
    opacity:0.85;
}
`
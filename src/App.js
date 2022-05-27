import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserContext from "./contexts/UserContext"
import UserToken from "./contexts/UserToken"
import UserCredentials from "./contexts/UserCredentials"
import Home from "./Home"
import Register from "./Register"
import Habits from "./Habits"
import Today from "./Today"
import History from "./History"
import { useState } from "react"


export default function App() {

    const [userCredentials,setUserCredentials]=useState({})
    const [tasks,setTasks] =useState([])
    const [token,setToken] =useState("")

    console.log(token)
    return (

        <BrowserRouter> 
            <UserContext.Provider value={{tasks, setTasks}}>
            <UserToken.Provider value ={{token,setToken}}>
            <UserCredentials.Provider value ={{UserCredentials,setUserCredentials}}>
            
            <Routes>
            
            <Route path="/" element = {<Home 
            UserCredentials={setUserCredentials}
            />} />

            <Route path="/cadastro" element = {<Register />} />
            <Route path ="/habitos" element ={<Habits />} />
            <Route path ="/hoje" element = {<Today />} />
            <Route path ="/historico" element = {<History />} />

                    
            </Routes>
            </UserCredentials.Provider>
            </UserToken.Provider>
            </UserContext.Provider>
            
        </BrowserRouter>




    )

}
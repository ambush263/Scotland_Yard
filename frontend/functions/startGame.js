import gamePreferences from "../Data/gamePreferences";
import { useNavigate } from "react-router-dom";

function startGame(playerList,navigate){
    const gameSettings = JSON.parse(localStorage.getItem("gameSettings"))
    const sendinitialData = async () => {
        try {
            const response = await fetch("/start-game", { method : "POST" , headers:{"Content-type" : "application/json"} , body : JSON.stringify({playerList,gameSettings})})
            const data = await response.json()
            console.log(data)
            localStorage.setItem("gameData",JSON.stringify(data))
            navigate("pass-play")
        } catch(error){
            console.log(error)
        }
    }

}

export default startGame
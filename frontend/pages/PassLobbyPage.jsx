import { useState } from "react";
import styles from "./PassLobbyPage.module.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function PassLobbyPage() {
    const [playerInput, setPlayerInput] = useState("");
    const [playerList, setPlayerList] = useState([]); //List of Objects
    const [errorMsg, setErrorMsg] = useState("");
    const [playErrorMsg, setPlayErrorMsg] = useState("");
    const navigate = useNavigate();

    const addPlayer = (input) => {
        if (playerList.length == 8) {
            setErrorMsg("The Lobby is Full");
            setPlayerInput("");
            return;
        }
        if (!input) {
            setErrorMsg("Player name cannot be Empty");
            return;
        }
        if (input.length >= 15) {
            setErrorMsg("Player name should be less than 15 characters");
            return;
        }
        for (let i = 0; i < playerList.length; i++) {
            if (playerList[i].name === input) {
                setErrorMsg("The Player Already Exists");
                return;
            }
        }
        let newList = [...playerList]; //equivalent to copy(you can still use for loop btw)
        newList.push({ id: playerList.length + 1, name: input });
        setPlayerList(newList);
        setPlayerInput("");
        setErrorMsg("");
    };

    const deletePlayer = (playerId) => {
        let newList = [];
        let newid = 1;
        for (let i = 0; i < playerList.length; i++) {
            if (playerList[i].id != playerId) {
                newList.push({ id: newid, name: playerList[i].name });
                newid++;
            }
        }
        setPlayerList(newList);
        console.log(newList);
        setErrorMsg("");
    };

    const startGame = () => {
        playerList.length > 1
            ? navigate("/pass-play")
            : setPlayErrorMsg("Minimum Two Players are required");
    };

    const resetErrorMsgs = (e) => {
        if (e.target === e.currentTarget) {
            setErrorMsg("");
            setPlayErrorMsg("");
        }
    };

    return (
        <div className="themeBackground">
            <div className="fogOverlay"></div>
            <div className="centerCard" onClick={(e) => resetErrorMsgs(e)}>
                <h1>Pass n Play</h1>
                <span className={styles.inputRow}>
                    <input
                        name="playerInputBox"
                        value={playerInput}
                        onChange={(e) => setPlayerInput(e.target.value)}
                        onKeyDown={(e) =>
                            e.key === "Enter" && addPlayer(playerInput)
                        }
                        type="text"
                        placeholder="Enter Player Name"
                        className={styles.playerInput}
                    ></input>
                    <button
                        className={styles.addBtn}
                        onClick={() => addPlayer(playerInput)}
                    >
                        Add
                    </button>
                </span>
                {errorMsg && <p className={styles.errorMsg}>{errorMsg}</p>}
                <ul className={styles.playerList}>
                    {playerList.map((player) => (
                        <li key={player.id} className={styles.playerItem}>
                            <span className={styles.playerRow}>
                                <p className={styles.playerName}>
                                    {player.name}
                                </p>
                                <button
                                    onClick={() => deletePlayer(player.id)}
                                    className={styles.deleteBtn}
                                >
                                    Delete
                                </button>
                            </span>
                        </li>
                    ))}
                </ul>
                <span className={styles.buttonRow}>
                    <Button onClick={() => navigate("/gameSettings")} name="Settings"></Button>
                    <Button
                        onClick={() => {
                            startGame();
                        }}
                        name="Play"
                        primary
                    ></Button>
                </span>
                {playErrorMsg && (
                    <p className={styles.errorMsg}>{playErrorMsg}</p>
                )}
            </div>
        </div>
    );
}

export default PassLobbyPage;

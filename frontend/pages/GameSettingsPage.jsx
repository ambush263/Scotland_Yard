import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import defaultGameSettings from "../Data/defaultGameSettings";
import maps from "../Data/maps";
import TicketValueSettings from "../components/TicketValueSettings";
import styles from "./GameSettingsPage.module.css";
import Button from "../components/Button";

function GameSettingsPage() {
    const [gameSettings, setGameSettings] = useState(
        JSON.parse(localStorage.getItem("gameSettings")) || defaultGameSettings,
    );
    const navigate = useNavigate()
    const firstRender = useRef(true);
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        localStorage.setItem("gameSettings", JSON.stringify(gameSettings));
    }, [gameSettings]);


    return (
        <div className="themeBackground">
            <div className="fogOverlay"></div>

            <div className={`centerCard ${styles.centerCard}`}>
                <h1>Settings</h1>

                <div className={styles.settingsCard}>
                    <span className={styles.mapRow}>
                        <p className={styles.mapLabel}>Map :</p>

                        <select
                            className={styles.mapSelect}
                            value={gameSettings.map}
                            onChange={(e) => {
                                setGameSettings({
                                    ...gameSettings,
                                    map: e.target.value,
                                });
                            }}
                        >
                            {Object.entries(maps).map(([map, data]) => (
                                <option key={map} value={map}>
                                    {data.name}
                                </option>
                            ))}
                        </select>
                    </span>

                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={gameSettings.autoTicketValues}
                            onChange={(e) => {
                                setGameSettings({
                                    ...gameSettings,
                                    autoTicketValues: e.target.checked,
                                });
                            }}
                        />
                        Auto Balance Tickets
                    </label>

                    {!gameSettings.autoTicketValues && (
                        <TicketValueSettings
                            gameSettings={gameSettings}
                            setGameSettings={setGameSettings}
                        /> 
                    )
                    }
                </div>
                <div className={styles.submitWrapper}>
                    <Button onClick={() => navigate("/pass-lobby")} name="Done" primary/>
                </div>
            </div>
        </div>
    );
}

export default GameSettingsPage;

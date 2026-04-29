import styles from "./TicketValueSettings.module.css";

function TicketValueSettings({ gameSettings, setGameSettings }) {
    const updateTicketValues = (category, ticket, value) => {
        let newGameSettings = {
            ...gameSettings,
            [category]: { ...gameSettings[category] },
        };
        newGameSettings[category][ticket] = value;
        setGameSettings(newGameSettings);
    };
    return (
        <div className={styles.ticketSection}>
            <h3 className={styles.ticketTitle}>Tickets :</h3>
            <span className={styles.ticketGroup}>
                <p className={styles.groupLabel}>Detective :</p>
                <label className={styles.ticketLabel}>
                    Taxi
                    <input
                        className={styles.ticketInput}
                        type="number"
                        value={gameSettings.detectiveTicketValues.taxi}
                        onChange={(e) =>
                            updateTicketValues(
                                "detectiveTicketValues",
                                "taxi",
                                Number(e.target.value),
                            )
                        }
                    />
                </label>

                <label className={styles.ticketLabel}>
                    Bus
                    <input
                        className={styles.ticketInput}
                        type="number"
                        value={gameSettings.detectiveTicketValues.bus}
                        onChange={(e) =>
                            updateTicketValues(
                                "detectiveTicketValues",
                                "bus",
                                Number(e.target.value),
                            )
                        }
                    />
                </label>

                <label className={styles.ticketLabel}>
                    Underground
                    <input
                        className={styles.ticketInput}
                        type="number"
                        value={gameSettings.detectiveTicketValues.underground}
                        onChange={(e) =>
                            updateTicketValues(
                                "detectiveTicketValues",
                                "underground",
                                Number(e.target.value),
                            )
                        }
                    />
                </label>
            </span>

            <span className={styles.ticketGroup}>
                <p className={styles.groupLabel}>Mr.X :</p>

                <label className={styles.ticketLabel}>
                    Taxi
                    <input
                        className={styles.ticketInput}
                        type="number"
                        value={gameSettings.XTicketValues.taxi}
                        onChange={(e) =>
                            updateTicketValues(
                                "XTicketValues",
                                "taxi",
                                Number(e.target.value),
                            )
                        }
                    />
                </label>

                <label className={styles.ticketLabel}>
                    Bus
                    <input
                        className={styles.ticketInput}
                        type="number"
                        value={gameSettings.XTicketValues.bus}
                        onChange={(e) =>
                            updateTicketValues(
                                "XTicketValues",
                                "bus",
                                Number(e.target.value),
                            )
                        }
                    />
                </label>

                <label className={styles.ticketLabel}>
                    Underground
                    <input
                        className={styles.ticketInput}
                        type="number"
                        value={gameSettings.XTicketValues.underground}
                        onChange={(e) =>
                            updateTicketValues(
                                "XTicketValues",
                                "underground",
                                Number(e.target.value),
                            )
                        }
                    />
                </label>

                <label className={styles.ticketLabel}>
                    Black Market
                    <input
                        className={styles.ticketInput}
                        type="number"
                        value={gameSettings.XTicketValues.blackMarket}
                        onChange={(e) =>
                            updateTicketValues(
                                "XTicketValues",
                                "blackMarket",
                                Number(e.target.value),
                            )
                        }
                    />
                </label>
            </span>
        </div>
    );
}

export default TicketValueSettings;
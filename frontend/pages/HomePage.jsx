import styles from "./HomePage.module.css"
import Button from '../components/Button'
import { useNavigate } from "react-router-dom"

function HomePage(){
    const navigate = useNavigate()

    return(
        <div className={styles.background}>
            <div className={styles.fogOverlay}></div>
            <div className={styles.centerCard}>
                <div className={styles.badge}>🔍</div>
                <h1 className={styles.title}>Scotland Yard</h1>
                <p className={styles.subtitle}>Mr. X is on the move.</p>
                <div className={styles.buttonGroup}>
                    <Button onClick={() => navigate("/login")} name="Sign In" primary />
                    <Button name="Play as Guest" />
                </div>
            </div>
        </div>
    )
}

export default HomePage
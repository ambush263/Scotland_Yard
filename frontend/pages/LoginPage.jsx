import Button from "../components/Button";
import styles from "./LoginPage.module.css";
import {Link} from "react-router-dom";

function LoginPage() {

    const handleLogin = () => {
        return;
    }

    return (
        <div className="themeBackground">
            <div className="fogOverlay"></div>
            <div className="centerCard">
                <h1>Scotland Yard</h1>
                <div className={styles.inputGroup}>
                    <input
                        className={styles.loginInput}
                        type="text"
                        placeholder="Username"
                    ></input>
                    <input
                        className={styles.loginInput}
                        type="password"
                        placeholder="Password"
                    ></input>
                    <Button onClick={handleLogin} name="Sign In" primary/>
                    <p className={styles.signUpText}>Haven't Registered yet? Click Here to <Link className={styles.signUpLink}>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;

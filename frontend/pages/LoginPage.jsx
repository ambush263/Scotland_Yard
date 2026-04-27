import Button from "../components/Button";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function LoginPage() {
    const passWordRef = useRef(null);
    const buttonRef = useRef(null);
    const userNameRef = useRef(null);
    const [errorMsg, setErrorMsg] = useState("");

    const handleLogin = (username, password) => {
        setErrorMsg("Successful");
        return;
    };

    return (
        <div className="themeBackground">
            <div className="fogOverlay"></div>
            <div
                className="centerCard"
                onClick={(e) => {
                    if (e.target === e.currentTarget) setErrorMsg("");
                }}
            >
                <h1>Scotland Yard</h1>
                <div className={styles.inputGroup}>
                    <input
                        autoFocus
                        className={styles.loginInput}
                        ref={userNameRef}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                if (e.target.value) {
                                    if (!passWordRef.current.value) {
                                        passWordRef.current.focus();
                                    } else {
                                        buttonRef.current.click();
                                    }
                                    setUser((u) => ({
                                        ...u,
                                        userName: e.target.value,
                                    }));
                                } else {
                                    setErrorMsg("Username is required");
                                }
                            }
                        }}
                        type="text"
                        placeholder="Username"
                    ></input>
                    <input
                        ref={passWordRef}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                if (e.target.value) {
                                    if (!userNameRef.current.value) {
                                        userNameRef.current.focus();
                                        setErrorMsg("Username is required");
                                    } else {
                                        buttonRef.current.click();
                                    }
                                    setUser((u) => ({
                                        ...u,
                                        passWord: e.target.value,
                                    }));
                                } else {
                                    setErrorMsg("Password is required");
                                }
                            }
                        }}
                        className={styles.loginInput}
                        type="password"
                        placeholder="Password"
                    ></input>
                    <p className="errorMsg">{errorMsg}</p>
                    <Button
                        ref={buttonRef}
                        onClick={() => {
                            if (!userNameRef.current.value)
                                setErrorMsg("Username is required");
                            else if (!passWordRef.current.value)
                                setErrorMsg("Password is required");
                            else {
                                setErrorMsg("");
                                handleLogin(userNameRef.current.value, passWordRef.current.value);
                            }
                        }}
                        name="Sign In"
                        primary
                    />
                    <p className={styles.signUpText}>
                        Haven't Registered yet? Click Here to{" "}
                        <Link className={styles.signUpLink}>Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;

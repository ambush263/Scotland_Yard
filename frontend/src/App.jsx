import { useState, createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PassLobbyPage from "../pages/PassLobbyPage";
import Play from "../pages/Play";
import initialGameSettings from "../Data/initialGameSettings";
import gamePreferences from "../Data/gamePreferences";
import UserData from "../Data/defaultUserData";
import "./App.css";

const GameContext = createContext();

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/pass-lobby",
        element: <PassLobbyPage />,
    },
    {
        path: "/pass-play",
        element: <Play />,
    },
]);

function App() {
    return (
        <>
            <GameContext.Provider
                value={{ initialGameSettings, gamePreferences }}
            >
                <RouterProvider router={router} />
            </GameContext.Provider>
        </>
    );
}

export default App;

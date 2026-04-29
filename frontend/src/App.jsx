import { useState} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PassLobbyPage from "../pages/PassLobbyPage";
import Play from "../pages/Play";
import GameSettingsPage from "../pages/GameSettingsPage";

import "./App.css";


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
    {
      path : "/gameSettings",
      element : <GameSettingsPage />
    }
]);

function App() {

    return (
        <>
          <RouterProvider router={router} />
        </>
    );
}

export default App;

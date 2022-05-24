import React from "react"
import AppStateProvider from "./src/contexts/AppState";
import "./src/global.css"

export const wrapRootElement = ({ element }) => (
    <AppStateProvider>{element}</AppStateProvider>
)
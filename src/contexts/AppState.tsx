import React, {createContext, PropsWithChildren, useContext, useState} from "react";

interface AppState {
    currentPage: string
    updateCurrentPage: (state: string) => void
}

const AppStateContext = createContext<AppState>({
    currentPage: "/",
    updateCurrentPage: (state: string) => console.log(state)
})

const useAppState = () => {
    return useContext(AppStateContext)
}

const AppStateProvider = ({children}: PropsWithChildren<{}>) => {
    const [currentPage, setCurrentPage] = useState<string>("/")
    return (
        <AppStateContext.Provider value={{
            currentPage: currentPage,
            updateCurrentPage: setCurrentPage
        }}>
            {children}
        </AppStateContext.Provider>
    )
}

export default AppStateProvider
export { useAppState }

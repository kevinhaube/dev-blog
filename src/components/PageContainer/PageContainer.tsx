import * as React from "react"
import {PropsWithChildren} from "react";
import NavBar from "../NavBar/NavBar";
import router from "../NavBar/router";

const PageContainer = ({children}: PropsWithChildren<{}>) => {
    return (
        <>
            <NavBar configs={router} />
            <main>
                {children}
            </main>
        </>
    )
}

export default PageContainer

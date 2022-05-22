import * as React from "react"
import * as styles from "./pageContainer.module.css"
import {PropsWithChildren} from "react";
import NavBar from "../NavBar/NavBar";
import router from "../NavBar/router";

const PageContainer = ({children}: PropsWithChildren<{}>) => {
    return (
        <>
            <NavBar configs={router} />
            <main className={styles.container}>
                {children}
            </main>
        </>
    )
}

export default PageContainer

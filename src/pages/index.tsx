import * as React from "react"
import NavBar, {NavigationConfig} from "../components/NavBar/NavBar";

const ROUTER: NavigationConfig[] = [
    {label: "blog", path: "/blog"},
    {label: "about", path: "/about"}
]

const IndexPage = () => {

    return (
        <div>
            <NavBar configs={ROUTER} />
        </div>
    )
}

export default IndexPage

import {Link} from "gatsby";
import * as React from "react";
import * as styles from "./navbar.module.css"
import {useAppState} from "../../contexts/AppState";

interface NavigationConfig {
    label: string,
    path: string
}

const NavItem = ({config, active}: {config: NavigationConfig, active: boolean}) => {
    const {updateCurrentPage} = useAppState()
    return (
        <Link
            className={
                active
                    ? `${styles.navbarItem} ${styles.activeItem}`
                    : styles.navbarItem
            }
            to={config.path}
        >
            {config.label}
        </Link>
    )
}
const NavItemGroup = ({configs}: {configs: NavigationConfig[]}) => {
    const {currentPage, updateCurrentPage} = useAppState()
    return (
        <ul className={styles.navbarItemContainer}>
            {configs.map(config =>
                <li onClick={() => updateCurrentPage(config.path)} className={styles.navbarItemBox} key={config.label}>
                    <NavItem active={currentPage === config.path} config={config} />
                </li>
            )}
        </ul>
    )
}

const NavBar = ({configs}: {configs: NavigationConfig[]}) => {
    return (
        <nav
            id="site-nav"
            aria-label="Site Nav"
            className={styles.navbarContainer}
        >
            <NavItemGroup configs={configs} />
        </nav>
    )
}

export default NavBar
export type {NavigationConfig}
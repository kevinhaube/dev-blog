import {Link} from "gatsby";
import * as React from "react";
import * as styles from "./navbar.module.css"

interface NavigationConfig {
    label: string,
    path: string
}

const NavItem = ({config}: {config: NavigationConfig}) =>
    <Link className={styles.navbarItem} to={config.path}>{config.label}</Link>
const NavItemGroup = ({configs}: {configs: NavigationConfig[]}) => {
    return (
        <ul className={styles.navbarItemContainer}>
            {configs.map(config =>
                <li className={styles.navbarItemBox} key={config.label}>
                    <NavItem config={config} />
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
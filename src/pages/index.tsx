import * as React from "react"
import {Link} from "gatsby";

const NavBar = () => {
    const NavItem = () => {
        return (
            <div>
                {/* BUG: 'Link' cannot be used as a JSX component. Its instance type
                'GatsbyLink<unknown>' is not a valid JSX element. */}
                <Link to="/about">About</Link>
            </div>
        )
    }
    const NavItemGroup = () => {
        return (
            <ul>
                <li><NavItem /></li>
            </ul>
        )
    }
    return (
        <div>
            <NavItemGroup />
        </div>
    )
}

const IndexPage = () => {
  return (
      <div>
        <NavBar />
      </div>
  )
}

export default IndexPage

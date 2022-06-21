import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Trade With ATL
            </Link>
            <ul>
                <CustomLink to="/Home">Home</CustomLink>
                <CustomLink to="/Portfolio">Portfolio</CustomLink>
                <CustomLink to="/TradingHistory">Trading History</CustomLink>
                <CustomLink to="/PendingOrders">Pending Orders</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
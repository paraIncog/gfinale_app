import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return(
        <div className="container HorizontalMargin">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Esilehele</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/books' className="nav-link">Raamatuteenus</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/weather' className="nav-link">Ilmateenus</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/news' className="nav-link">Postitused</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link">Minust</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="HorizontalMargin">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
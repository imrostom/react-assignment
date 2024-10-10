import { Link } from "react-router-dom";
import adminLogo from "../assets/img/AdminLTELogo.png"

function Sidebar() {
    return <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
        <div className="sidebar-brand">
            <Link to="/" className="brand-link">
                <img src={adminLogo} alt="AdminLTE Logo" className="brand-image opacity-75 shadow" />
                <span className="brand-text fw-light">NewsPortal</span>
            </Link>
        </div>
        <div className="sidebar-wrapper">
            <nav className="mt-2">
                <ul className="nav sidebar-menu flex-column">
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link">
                            <i className="nav-icon bi bi-speedometer"></i>
                            <p>Dashboard</p>
                        </Link>
                        <Link to="/setting" className="nav-link">
                            <i className="nav-icon bi bi-gear"></i>
                            <p>Setting</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
}

export default Sidebar;

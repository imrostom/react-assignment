function Sidebar() {
    return <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
        <div className="sidebar-brand">
            <a href="../index.html" className="brand-link">
                <img src="../../../dist/assets/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image opacity-75 shadow" />
                <span className="brand-text fw-light">AdminLTE 4</span>
            </a>
        </div>
        <div className="sidebar-wrapper">
            <nav className="mt-2">
                <ul className="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
                    <li className="nav-item"> <a href="../generate/theme.html" className="nav-link"> <i className="nav-icon bi bi-speedometer"></i>
                        <p>Theme Generate</p>
                    </a> </li>
                </ul>
            </nav>
        </div>
    </aside>
}

export default Sidebar;

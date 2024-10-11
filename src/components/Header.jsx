import { Link } from "react-router-dom";
import userImage from "../assets/img/avatar.png"
import { useEffect, useState } from "react";

function Header() {
    const [user, setUser] = useState({});
    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            setUser(JSON.parse(user))
        }
    }, []);


    return <nav className="app-header navbar navbar-expand bg-body">
        <div className="container-fluid">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown user-menu">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <img src={userImage} className="user-image rounded-circle shadow" alt="User Image" />
                        <span className="d-none d-md-inline">{user.name}</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                        <li className="user-header text-bg-primary">
                            <img src={userImage} className="rounded-circle shadow" alt="User Image" />
                            <p>{user.name}<small>Member since 2024</small>
                            </p>
                        </li>
                        <li className="user-footer">
                            <a href="#" className="btn btn-default btn-flat">Profile</a>
                            <Link to="logout" className="btn btn-default btn-flat float-end">Sign out</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
}

export default Header;

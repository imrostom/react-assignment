import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'

function AdminLayout() {
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (!user) {
            navigate('/login');
        }
    }, []);

    return <div className="app-wrapper">
        <Header />
        <Sidebar />
        <Outlet />
        <Footer />
    </div>
}

export default AdminLayout
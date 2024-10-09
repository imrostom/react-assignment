import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

function DefaultLayout() {
    return <div className="app-wrapper">

        <Header />

        <Sidebar />

        <Outlet />

        <Footer />
    </div>
}

export default DefaultLayout
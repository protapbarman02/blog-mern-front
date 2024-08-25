import React from 'react'
import { Outlet } from 'react-router-dom'



export default function Layout() {
    return (
        <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
            <div className="flex flex-col flex-1">
                <Outlet />
            </div>
        </div>
    )
}

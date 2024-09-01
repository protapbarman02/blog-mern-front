import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'


export default function Layout() {
    return (
        <div>
        <div  > <Header /></div>
            <div> <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex">
              <div className=" col-md-2 h-screen"> <Sidebar /></div>
                <div className="flex flex-col col-md-10">

                    <div className="flex-1 flex p-6 min-h-0 overflow-auto  col-span-12 text-justify ">
                        <div className="flex-1  col-md-3"></div>
                        <div className="flex-2 col-md-6 bg-lime-400 ">
                            <Outlet />
                        </div>
                        <div className="flex-1 col-md-3 "></div>

                    </div>
                </div>
            </div> 
            </div>
        </div>
       
    )
}

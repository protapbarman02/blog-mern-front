import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'


export default function ProfileLayout() {
    return (
        <div>
        <div  > <Header /></div>
            <div> <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex">
              <div className=" col-md-2 h-screen"> <Sidebar /></div>
                <div className="flex flex-col col-md-10">

                    <div className="flex-1 flex p-6 min-h-0 overflow-auto  col-span-12 text-justify bg-rose-200">
                        <Outlet />
                        <div className="flex-1 col-md-3 "></div>

                    </div>
                </div>
            </div> 
            </div>
        </div>
       
    )
}

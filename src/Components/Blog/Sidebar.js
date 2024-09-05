import React from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar() {
    return (
        <div className=" h-screen flex-1 bg-sky-800 flex flex-col">
            <div class=" h-1/3">1</div>
            <div class=" ms-6 h-1/3">
                <ul>
                    <li>
                        <Link to="/profile" className=" hover:no-underline font-bold" >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className=" hover:no-underline font-bold">
                            Home
                        </Link></li>
                    <li>
                        <Link to="/login" className=" hover:no-underline font-bold">
                            Login
                        </Link></li>
                    <li>
                        <Link to="/signup" className=" hover:no-underline font-bold">
                            Signup
                        </Link></li>
                    <li>
                        <Link to="/logout" className=" hover:no-underline font-bold">
                            Logout
                        </Link></li>


                </ul>

                </div>
            <div class=" h-1/3">3</div>


        </div>

    )
}

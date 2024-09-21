// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Sidebar() {
//     return (
//         <div className=" h-screen flex-1 bg-sky-800 flex flex-col">
//             <div class=" h-1/3">1</div>
//             <div class=" ms-6 h-1/3">
//                 <ul>
//                     <li>
//                         <Link to="/profile" className=" hover:no-underline font-bold" >
//                             Profile
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/" className=" hover:no-underline font-bold">
//                             Home
//                         </Link></li>
//                     <li>
//                         <Link to="/login" className=" hover:no-underline font-bold">
//                             Login
//                         </Link></li>
//                     <li>
//                         <Link to="/signup" className=" hover:no-underline font-bold">
//                             Signup
//                         </Link></li>
//                     <li>
//                         <Link to="/logout" className=" hover:no-underline font-bold">
//                             Logout
//                         </Link></li>


//                 </ul>

//                 </div>
//             <div class=" h-1/3">3</div>


//         </div>

//     )
// }

// import React from 'react';
// import SearchWidget from './SearchWidget';
// import PopularPostsWidget from './PopularPostsWidget';

// const Sidebar = () => {
//   return (
//     <div className="blog_right_sidebar">
//       <SearchWidget />
//       <PopularPostsWidget />
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineLogin } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { MdAssignmentInd } from "react-icons/md";
import { SiBloglovin } from "react-icons/si";


export default function Sidebar() {
    return (
        <div className=" h-screen flex-1 bg-sky-800 flex flex-col">
            <div class=" h-1/3">1
                <div class=" text-center font-bold text-yellow-200">
                    <h1 class="flex gap-2 text-center "><SiBloglovin />Blog-Mern</h1></div>
                </div>
            <div class=" ms-6 h-1/3">
                <ul>
                    <li>
                        <Link to="/profile" className=" flex gap-3 py-2 text-white hover:no-underline font-bold" >
                            <CgProfile /> Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="flex gap-3 py-2 text-white hover:no-underline font-bold">
                            <IoHomeOutline /> Home
                        </Link></li>
                    <li>
                        <Link to="/login" className="flex gap-3 py-2 text-white hover:no-underline font-bold">
                            <AiOutlineLogin /> Login
                        </Link></li>
                    <li>
                        <Link to="/signup" className="flex gap-3 py-2 text-white hover:no-underline font-bold">
                            <MdAssignmentInd /> Signup
                        </Link></li>
                    <li>
                        <Link to="/logout" className="flex gap-3 py-2 text-white hover:no-underline font-bold">
                            <BiLogOutCircle /> Logout
                        </Link></li>


                </ul>

                </div>
            <div class=" h-1/3">3
              <div class=" text-pink-400 text-center py-8">Lets Go This Blog  🔎🔦 </div>
            </div>


        </div>

    )
}
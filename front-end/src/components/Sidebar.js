import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
 import Logo from '../Logo.jpg';
 import "../App.css";

// import Logo from '../images/Logo.jpg';
import{
    FaBars,
    FaThLarge,
    FaUniversalAccess,

}from "react-icons/fa";

import { 
    AiOutlineSchedule 
} from "react-icons/ai";

// import { 
//     IoDocumentsOutline
// } from "react-icons/io";

import { 
    ImProfile,
    ImFilesEmpty,
} from "react-icons/im";



export const Sidebar = ({children}) => { 
    const[isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/studentdash",
            name:"StudentDashboard",
            icon:<FaThLarge/>
        },
        {
            path:"/approveacc",
            name:"ApproveAccommodation",
            icon:<FaUniversalAccess/>
        },
        {
            path:"/viewdoc",
            name:"ViewDocuments",
            icon:<ImFilesEmpty/>
        },
        {
            path:"/reqaccommodation",
            name:"RequestAccommodation",
            icon:<AiOutlineSchedule/>
        },
        {
            path:"/completeprof",
            name:"CompleteProfile",
            icon:<ImProfile/>
        },
    ]
    return(
        <div className="container">
            <div style={{width: isOpen ? "300px" : "300px" }}className="sidebar">
                <div className="top_section">
                <a href = "/" className="site-title"><img src={Logo} className="App-logo" alt="logo" /> </a>
                    <div style={{marginLeft: isOpen ? "50px" : "0px" }}className="bars">
                        {/* <FaBars onClick={toggle}/> */}
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                     <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div className="link_text">{item.name}</div>
                     </NavLink>
                    ))
                }
            </div>
            <main>
                {children}
            </main>
        </div>
    );
};

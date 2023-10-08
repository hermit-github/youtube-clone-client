import React from 'react'
import {AiOutlineSearch,AiOutlineClose} from "react-icons/ai"
import {TiMicrophone} from "react-icons/ti"
import {BsYoutube,BsCamera,BsBell} from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"
import {IoAppsSharp} from "react-icons/io5"
import { Link, useNavigate } from 'react-router-dom'

const NavBar:React.FC = () => {
    const navigate = useNavigate() 
  return (
    <div className="flex justify-between items-center w-full px-8 h-full bg-[#212121] opacity-95">
        <div className="flex gap-8 items-center text-2xl ]">
            <div className=" hover:cursor-pointer text-white">
                <GiHamburgerMenu/>
            </div>
            <Link to="/">
                <div className="flex gap-1 justify-center items-center" onClick={() => navigate("/")}>
                    <BsYoutube className='text-3xl text-red-600'/>
                    <span className='text-2xl font-medium text-white'>Youtube</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default NavBar
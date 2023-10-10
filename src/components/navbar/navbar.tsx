import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsBell, BsCameraVideo } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch:React.MouseEventHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div className="flex justify-between items-center w-full px-8 h-full bg-[#212121] opacity-95">
      <div className="flex gap-8 items-center text-2xl">
        <div className=" hover:cursor-pointer text-white">
          <GiHamburgerMenu />
        </div>
        <div
          className="flex gap-1 justify-center items-center hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <BsYoutube className="text-3xl text-red-600" />
          <span className="text-2xl font-medium text-white">YouTube</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <form action="">
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
            <div className="flex gap-4 items-center pr-5">
              <div>
                <AiOutlineSearch className="text-xl" />
              </div>
              <input
                type="text"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
              />
              <AiOutlineClose className="text-xl cursor-pointer" />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800" onClick={handleSearch}>
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full hover:cursor-pointer">
            <TiMicrophone/>
        </div>
      </div>

      <div className="flex gap-5 items-center text-xl">
        <BsCameraVideo className="hover:cursor-pointer"/>
        <IoAppsSharp className="hover:cursor-pointer"/>
        <div className="relative">
            <BsBell className="hover:cursor-pointer"/>
            <div className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
                9+
            </div>
        </div>
        <img src="https://media.licdn.com/dms/image/C5603AQGRQAevF_C83g/profile-displayphoto-shrink_800_800/0/1654783823782?e=2147483647&v=beta&t=_FD4tWym3i8cmR5R5Y3hoWfAoKhV0AekRieRffOqZDc" alt="DP" className="w-9 h-9 rounded-full object-cover hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default NavBar;

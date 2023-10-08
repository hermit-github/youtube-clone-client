import React from 'react'

type LayoutProps = {
    navBarContent?:any;
    sideBarContent?:any;
    mainContent?:any;
}

const Layout:React.FC<LayoutProps> = ({navBarContent,sideBarContent,mainContent}) => {
  return (
    <>
        <div className="nav-bar-container h-14 sticky top-0 w-full z-50">{navBarContent}</div>
        <div className="content-container fixed top-14 w-full h-full flex">
            <div className="side-bar-content bg-green-500 w-1/6 h-full">{sideBarContent}</div>
            <div className="main-content bg-red-500 w-5/6 z-100">{mainContent}</div>
        </div>
        
    </>
  )
}

// bg-[#212121] opacity-95 

export default Layout
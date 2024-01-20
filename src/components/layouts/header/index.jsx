import { NAV_ITEM, SEARCH_INPUT_PARAMS } from "./constans";
import NavItem from "./nav-item";
import Input from "../../ui/input";
import DarkmodeButtons from "./darkMode-buttons";
import { useState } from "react";
import MobileMneu from "../../mobile-menu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const inputParams = SEARCH_INPUT_PARAMS;

  return (
    <header className="sticky top-0 shadow-xl  bg-white flex items-center justify-around py-2 px-2 opacity-90 z-20 duration-500 dark:bg-slate-800 dark:text-white ">
      <h1 className="font-bold text-2xl uppercase dark:text-white">GeekLib</h1>
      <div>
        <Input type={inputParams.type} placeholder={inputParams.placeholder} />
      </div>
      <nav className="space-x-6 hidden lg:flex ">
        {NAV_ITEM.map(({text, link})=> <NavItem key={text} text={text} link={link} />)}
      </nav>
      <div className="hidden lg:flex items-center space-x-4">
        <DarkmodeButtons />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-slate-200 ">
          <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
        </svg>
      </div>
      <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className=" lg:hidden z-30">
        {
          !mobileMenuOpen ? 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 z-40" >
          <path fillRule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg> 
        :
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 z-40">
          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
        }
      </div>
      <MobileMneu isOpen={mobileMenuOpen}/>      
    </header>
  )
}

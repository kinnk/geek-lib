import { NAV_ITEM, SEARCH_INPUT_PARAMS } from "./constans";
import NavItem from "./nav-item";
import Input from "../../ui/input";
import DarkmodeButtons from "./darkMode-buttons";
import { useState } from "react";
import MobileMneu from "../../mobile-menu";
import IconWraper from "../../Icon-wraper";
import AccountButton from "./account-button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const inputParams = SEARCH_INPUT_PARAMS;
  function clickToClose(){
    setMobileMenuOpen(!mobileMenuOpen)
  }
  return (
    <header className="shadow-xl  flex items-center justify-between py-2 px-4 xl:px-10 z-20 duration-500 bg-white/90 dark:bg-slate-800/90 space-x-2 top-0 sticky">
      <h1 className="font-bold text-2xl uppercase dark:text-white">GeekLib</h1>

      {/* Navigation */}
      <nav className="space-x-10 hidden lg:flex ">
        {NAV_ITEM.map(({text, link})=> <NavItem key={text} text={text} link={link} />)}
      </nav>

      <div className="flex ">
        <div className="hidden lg:flex items-center gap-x-1">
          <IconWraper>
            {/* searchIcon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 textClr">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </IconWraper>
          <AccountButton />
          <DarkmodeButtons />
        </div>

        <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className=" lg:hidden z-30 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 textClr" >
            <path fillRule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg> 
        </div>
      </div>
      <MobileMneu isOpen={mobileMenuOpen} clickToClose={clickToClose}/>      
    </header>
  )
}

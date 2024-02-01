import AccountButton from "../layouts/header/account-button";
import { NAV_ITEM, SEARCH_INPUT_PARAMS } from "../layouts/header/constans";
import DarkmodeButtons from "../layouts/header/darkMode-buttons";
import NavItem from "../layouts/header/nav-item";
import Input from "../ui/input";

export default function MobileMneu({ isOpen, clickToClose }) {

  return (
    <>
      <div 
        onClick={clickToClose}
        className={`absolute top-0 right-0 bg-black/70 h-screen w-screen z-30 ${isOpen ? 'flex' : 'hidden'}`}/>
      <div className={`absolute top-0 right-0 bg-white/90 dark:bg-slate-800/90 z-40 ${isOpen ? 'flex' : 'hidden'}
      w-1/3 h-screen px-6 py-4 flex-col items-center space-y-2`}>
        <div className="flex items-center justify-between gap-x-1 w-full"> 
          <AccountButton/>
          <DarkmodeButtons />
        </div>
        <div>
        <Input type={SEARCH_INPUT_PARAMS.type} placeholder={SEARCH_INPUT_PARAMS.placeholder} />
        </div>
        <nav className=" flex flex-col justify-start items-center text-lg gap-y-2">
          {NAV_ITEM.map(({text, link})=> <NavItem key={text} text={text} link={link} />)}
        </nav>
      </div> 
    </>
  )
}

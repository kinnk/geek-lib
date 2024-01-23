import { NAV_ITEM } from "../layouts/header/constans";
import DarkmodeButtons from "../layouts/header/darkMode-buttons";
import NavItem from "../layouts/header/nav-item";

export default function MobileMneu({ isOpen, clickToClose }) {

  return (
    <>
      <div 
        onClick={clickToClose}
        className={`absolute top-0 -left-2 right-0 bg-black opacity-60 h-screen w-screen z-30 ${isOpen ? 'flex' : 'hidden'}`}/>
      <div className={`absolute top-0 right-0 bg-white dark:bg-slate-800 pr-16 z-40 ${isOpen ? 'flex' : 'hidden'}
      px-6 py-4 flex-col items-start space-y-4`}>
        <DarkmodeButtons />
        <nav className=" flex flex-col justify-start items-center text-lg gap-y-2">
          {NAV_ITEM.map(({text, link})=> <NavItem key={text} text={text} link={link} />)}
        </nav>
      </div> 
    </>
  )
}

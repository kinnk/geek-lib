import { NAV_ITEM } from "../layouts/header/constans";
import DarkmodeButtons from "../layouts/header/darkMode-buttons";
import NavItem from "../layouts/header/nav-item";

export default function MobileMneu({ isOpen }) {
  return (
    <>
      <div className={`absolute top-0 left-[-50%] right-0 bg-black opacity-50 min-h-screen min-w-[150vw] z-10 ${isOpen ? 'flex' : 'hidden'}`}/>
      <div className={`absolute top-0 right-0 bg-white dark:bg-slate-800 min-h-screen w-1/3 z-20 ${isOpen ? 'flex' : 'hidden'}
      px-6 py-4 flex-col items-start space-y-4`}>
        <DarkmodeButtons />
        <nav className=" flex flex-col justify-start items-center text-lg gap-y-2">
          {NAV_ITEM.map(({text, link})=> <NavItem key={text} text={text} link={link} />)}
        </nav>
      </div> 
    </>
  )
}

import { Link } from "react-router-dom";

export default function NavItem({text, link}) {
  return (
    <Link to={link} 
      className="text-black hover:text-slate-500 dark:text-white relative before:duration-700
      before:content-[''] before:absolute before:w-0 before:h-0.5 before:bottom-0 before:left-0 before:bg-slate-800 dark:before:bg-white
      hover:before:w-full
      ">
      {text}
    </Link>
  )
}

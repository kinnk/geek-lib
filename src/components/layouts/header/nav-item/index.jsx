import { Link } from "react-router-dom";

export default function NavItem({text, link}) {
  return (
    <Link to={link} 
      className="text-black hover:text-slate-500 dark:text-white">
      {text}
    </Link>
  )
}

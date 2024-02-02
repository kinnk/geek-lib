import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom";

export default function NavItem({text, link}) {
  return (
    <Link to={link} 
      className="text-black dark:text-white relative duration-300
        hover:bg-gray-400/20 px-2 py-0.5 cursor-pointer rounded-sm
        ">
      {text}
    </Link>
  )
}

NavItem.propTypes = {
  text:PropTypes.string,
  link:PropTypes.string,
}

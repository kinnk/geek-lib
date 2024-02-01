import { useState } from "react"

export default function CheckBox({
  id,
  name
}) {
  const [state, setState] = useState(0);
  const style = 'relative after:absolute after:-top-0.5 after:-left-0.5 after:w-full after:h-full after:drop-shadow ';
  const styleByState = {
    [0]: 'after:content-["⬜"]',
    [1]: 'after:content-["✅"] ',
    [-1]: 'after:content-["❎"]'
  }
  function handleClick (){
    if(state === 0) return setState(1)
    if(state === 1) return setState(-1)
    if(state === -1) return setState(0)
  }
  return (
    <span className="relative flex items-center gap-x-0.5" >
      <input type="checkbox" id={name} value={state} onClick={handleClick} 
      className={`${style} ${styleByState[state]}`} />
      <label htmlFor={name} className="textClr select-none cursor-pointer">{name}</label>
    </span>
  )
}

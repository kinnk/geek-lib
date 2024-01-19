
export default function Toogle({
  startColor = 'bg-slate-200',
  endColor = 'bg-slate-500',
  startColorSwitch = 'bg-black',
  endColorSwitch = 'bg-white',
  onClick
}) {
  return (
    <label 
      onClick={onClick}
      className={`relative inline-block w-[60px] h-[34px]`}>
        <input
          className="opacity-0 w-0 h-0 peer" 
          type="checkbox" />
        <span className={`absolute cursor-pointer top-0 left-0 bottom-0 right-0 
          ${startColor} peer-checked:${endColor} duration-500 rounded-3xl 
          before:absolute before:content-[''] before:h-[26px] before:w-[26px] before:left-1 before:bottom-1 
          before:${startColorSwitch} peer-checked:before:${endColorSwitch} before:duration-500 before:rounded-[50%]
          before:drop-shadow-xl peer-checked:before:translate-x-6`}
            />
      </label>
  )
}


export default function Input({ 
  type, 
  placeholder,
  width,
}) {
  const inputWidth = {
    auto: 'w-auto',
    10: 'w-[10vw]',
    25: 'w-[25vw]',
    50: 'w-[50vw]',
    75: 'w-[75vw]',
    full: 'w-screen'
  }
  const style = {
    search: `outline-slate-500 bgClr textClr drop-shadow-2xl px-4 py-1 rounded-md ${inputWidth[width]}`,
    text: `outline-slate-500 bgClr textClr drop-shadow-2xl px-1  rounded-sm w-24`
  }

  return (
    <input type={type} placeholder={placeholder} 
      className={`${style[type]}`}/>
  )
}

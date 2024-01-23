
export default function Input({ 
  type, 
  placeholder,
}) {
  return (
    <input type={type} placeholder={placeholder} 
      className={`outline-slate-500 bgClr drop-shadow-2xl px-4 py-1 rounded-2xl w-[40vw] hidden md:flex `}/>
  )
}

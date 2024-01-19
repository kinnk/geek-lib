
export default function Input({ 
  type, 
  placeholder,
}) {
  return (
    <input type={type} placeholder={placeholder} 
      className={`outline-slate-500 bg-slate-200 dark:bg-slate-600 shadow-inner px-4 py-1 rounded-2xl w-80 `}/>
  )
}

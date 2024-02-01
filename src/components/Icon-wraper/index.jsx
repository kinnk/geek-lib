
export default function IconWraper({ children }) {
  return (
    <div className={`cursor-pointer bgClr flex gap-x-1 p-1 items-center rounded-2xl shadow-inner duration-500`}>
      { children }
    </div>
  )
}

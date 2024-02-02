
export default function IconWraper({ children }) {
  return (
    <div className={`cursor-pointer flex p-1 items-center rounded-sm  duration-300 hover:bg-gray-400/20`}>
      { children }
    </div>
  )
}

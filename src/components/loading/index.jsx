
export default function LoadingComponent() {
  return (
    <div className="w-screen h-[50vh] grid place-items-center">
    <div  className="flex text-2xl font-bold leading-[1.2] tracking-[5px] textClr animate-pulse">
      Loading 
      <div className="animate-bounce">...</div> 
    </div>
  </div>
  )
}

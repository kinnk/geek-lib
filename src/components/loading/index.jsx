import { PropTypes } from 'prop-types';

export default function LoadingComponent({
  h = 50 
}) {

  return (
    <div className={`w-screen h-[${h}vh] grid place-items-center`}>
    <div  className="flex text-2xl font-bold leading-[1.2] tracking-[5px] textClr animate-pulse">
      Loading 
      <div className="animate-bounce">...</div> 
    </div>
  </div>
  )
}

LoadingComponent.propTypes = {
  h: PropTypes.numbers  
}
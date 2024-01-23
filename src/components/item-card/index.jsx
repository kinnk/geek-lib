export default function ItemCard({
  item
}) {
  return (
    <div className='cursor-pointer group'>
      <div className='xl:w-[225px] lg:w-[200px] w-[170px] relative overflow-hidden rounded-xl drop-shadow-xl'> 
        <img src={item.images.jpg.image_url} alt="" className='w-full xl:h-[320px] lg:h-[295px] h-[265px] duration-300 hover:scale-110 object-cover'/>
        <div className='absolute top-0 left-0 w-full p-1 flex items-center justify-between'>
          <span className='bg-slate-200 dark:bg-slate-600 textClr px-2 rounded-xl opacity-90 z-10'>
            {item.rank}
          </span>
          <span className='bg-slate-200 dark:bg-slate-600 textClr px-2 rounded-xl opacity-90 z-10'>
            {item.score}
          </span>
        </div>
        <div className='absolute top-0 left-0 dark:bg-[#00000035] bg-[#ffffff35] w-0 h-full hidden pointer-events-none group-hover:flex group-hover:w-full'>
          <span className=' px-2 py-2 flex items-end justify-center textClr'>
            {}
          </span>
        </div>
      </div>
      <h4 className='textClr'>{item.title}</h4>
    </div>
  )
}

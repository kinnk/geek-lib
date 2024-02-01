export default function ItemCard({item}) {
  return (
    <div className='flex flex-col gap-y-2'>
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
      </div>
      <div>
        <h4 className='textClr tracking-tight leading-tight'>{item.title}</h4>
        <ul className={`textClr text-xs flex flex-row flex-wrap`}>
          {item?.genres.map(genre => <li className="after:[&:not(:last-child)]:content-['-']" key={genre.mal_id}> {genre.name}</li>)}
        </ul>
      </div>
    </div>
  )
}

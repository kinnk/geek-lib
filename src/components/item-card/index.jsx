import { PropTypes } from 'prop-types';


export default function ItemCard({ item }) {

  return (
    <div className='flex flex-col gap-y-2 cursor-pointer group'>
      <div className='w-[150px] relative overflow-hidden rounded-xl drop-shadow-xl'> 
        <img src={item.images.jpg.image_url} alt="" className='w-full h-[220px] duration-300 group-hover:scale-110 object-cover'/>
        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200/60 dark:bg-slate-800/60 w-0 h-0 group-hover:w-full group-hover:h-10 duration-700 flex items-center justify-center'>
          <h4 className='hidden textClr text-[1px] group-hover:inline-block group-hover:text-base'>Open</h4>
        </div>
        <div className='absolute top-0 left-0 w-full p-1 flex items-center justify-between'>
          <span className='bg-slate-200/90 dark:bg-slate-600/90 textClr px-2 rounded-md z-10 text-sm'>
            {item.rank}
          </span>
          <span className='bg-slate-200/90 dark:bg-slate-600/90 textClr px-2 rounded-md z-10 text-sm'>
            {item.score}
          </span>
        </div>
      </div>
      <div>
        <h4 className='textClr tracking-tight leading-tight'>{item.title}</h4>
        <ul className={`text-gray-400/70 text-xs flex flex-row flex-wrap`}>
          {item?.genres.map(genre => <li className="after:[&:not(:last-child)]:content-['-']" key={genre.mal_id}> {genre.name}</li>)}
        </ul>
      </div>
    </div>
  )
}

ItemCard.propTypes = {
  item: PropTypes.object,
}
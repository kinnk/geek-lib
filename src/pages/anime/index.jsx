import { useState } from "react";
import Input from "../../components/ui/input";
import { useGetAnimeGenresQuery } from "../../redux/api/jikan.api";
import CheckBox from "../../components/ui/checkbox";

const filters = [
  {type: ['tv', 'movie', 'ova', 'special', 'ona', 'music', 'cm', 'pv', 'tv_special']},
  {status: ['airing', 'complete', 'upcoming']},
  {rating: ['g', 'pg', 'pg13', 'r17', 'r', 'rx']},
  {}
]



export default function AnimePage() {
  const [genresIsOpen, setGenresOpen] = useState(false);
  const [sortMenuIsOpen, setSortMenuOpen] = useState(false);

  const {data: genres, isLoading: genresIsLoading} = useGetAnimeGenresQuery();

  return (
    <main className="p-4 w-full h-screen flex flex-row gap-x-2 rounded-sm">
      {/* left */}
      <div className="p-2 bg-slate-700 drop-shadow-md w-2/3 rounded-sm">
        <div className="relative flex justify-between items-center textClr mb-2">
          <h1 className="textClr">Library</h1>
          <svg onClick={() => setSortMenuOpen(!sortMenuIsOpen)} 
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer rounded-sm hover:bg-slate-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg> 
          <div className={`absolute top-6 right-1 z-10 rounded-sm drop-shadow-md bg-slate-700/90 w-[150px] h-[200px] ${sortMenuIsOpen ? 'block' : 'hidden'}`}>

          </div>
        </div>
        <div className="flex items-center justify-center">
          <Input type={'search'} placeholder={'Find'} width={75}/>
        </div>
        <div>
          items
        </div>  
      </div>
      {/* Right */}
      <div className="relative p-2 bg-slate-700 w-1/3 rounded-sm text-sm">
        <div onClick={() => setGenresOpen(true)}
          className="px-2 py-1 flex justify-between items-center textClr cursor-pointer rounded-sm hover:bg-slate-600">
          <h5>Genres</h5>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="p-2 textClr">
          <h5>Year</h5>
          <div className="flex items-center justify-between gap-x-4 ">
              <Input type={'text'} width={4} placeholder={'From'}/>
            <span>-</span>
              <Input type={'text'} width={20} placeholder={'To'}/>
          </div>
        </div>
        <div className="p-2 textClr">
          <h5>Score</h5>
          <div className="flex items-center justify-between gap-x-4 ">
              <Input type={'text'} width={20} placeholder={'From'}/>
            <span>-</span>
              <Input type={'text'} width={20} placeholder={'To'}/>
          </div>
        </div>
        <div>
          type
        </div>
        {/* Genres box */}
        <div className={`bg-slate-700 p-2 absolute w-full h-full top-0 duration-500 left-0 ${genresIsOpen ? 'block' : ' hidden'} `}>
          <div className="textClr flex items-center justify-between mb-2">
            <div onClick={() => setGenresOpen(false)}
              className="flex items-center justify-between cursor-pointer hover:bg-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z" clipRule="evenodd" />
              </svg>
              <h5>Genres</h5>
            </div>
            <div>Remove</div>
          </div>
          <div className="grid grid-cols-2 text-xs h-[85vh] overflow-y-scroll">
            {
              genres?.map(genre => <CheckBox key={genre.mal_id} name={genre.name} id={genre.mal_id}/>)
            }
          </div>
        </div>
      </div>
    </main>
  )
}
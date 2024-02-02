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
    <main className="p-4 w-full rounded-sm ">
      <div className="container mx-auto flex flex-row gap-x-2 ">
        {/* left */}
        <div className="p-2 bg-white dark:bg-slate-700 drop-shadow-2xl rounded-sm w-3/4 ">
          <div className="relative flex justify-between items-center textClr h-6 mb-2 border-b border-slate-600">
            <h1 className="textClr">Library</h1>
            <svg onClick={() => setSortMenuOpen(!sortMenuIsOpen)} 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer rounded-sm hover:bg-gray-400/20">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg> 
            <div className={`absolute top-6 right-1 z-20 rounded-sm darkbg-white/80 dark:bg-slate-700/80 w-[150px] h-[200px] shadow-lg backdrop-blur-sm ${sortMenuIsOpen ? 'block' : 'hidden'}`}>
              <div className="p-2 flex flex-col">
                <div>
                  <input type="radio" name="order" id="orderRank" />
                  <label htmlFor="orderRank">By rank</label>
                </div>
                <div>
                  <input type="radio" name="order" id="orderPopular" />
                  <label htmlFor="orderPopular">By popelar</label>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 space-y-2">
            <div className="flex items-center justify-center">
              <Input type={'search'} placeholder={'Find'} width={75}/>
            </div>
            <div>
              items
            </div>  
          </div>
        </div>
        {/* Right */}
        <div className="relative p-2 bg-white dark:bg-slate-700 drop-shadow-2xl rounded-sm text-sm w-1/4 min-h-[80vh] ">
          <div onClick={() => setGenresOpen(true)}
            className=" h-6 mb-2 flex justify-between items-center textClr cursor-pointer rounded-sm hover:bg-gray-400/20 border-b border-slate-600 px-2">
            <h5>Genres</h5>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="px-2 space-y-2">
            <div className="textClr">
              <h5>Year</h5>
              <div className="flex items-center justify-between gap-x-4 ">
                  <Input type={'text'} width={4} placeholder={'From'}/>
                <span>-</span>
                  <Input type={'text'} width={20} placeholder={'To'}/>
              </div>
            </div>
            <div className="textClr">
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
          </div>
          {/* Genres box */}
          <div className={`bg-white dark:bg-slate-700 drop-shadow-2xl rounded-sm p-2 absolute w-full h-[80vh] top-0 left-0 duration-500 ${genresIsOpen ? 'block' : 'hidden '} `}>
            <div className="textClr flex items-center justify-between mb-2 border-b">
              <div onClick={() => setGenresOpen(false)}
                className="flex items-center cursor-pointer hover:bg-gray-400/20 px-2 space-x-1 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z" clipRule="evenodd" />
                </svg>
                <h5>Genres</h5>
              </div>
              <div className="cursor-pointer hover:bg-gray-400/20 px-2">Remove</div>
            </div>
            <div className="grid grid-cols-2 text-xs max-h-[70vh] overflow-y-scroll">
              {
                genres?.map(genre => <CheckBox key={genre.mal_id} name={genre.name} id={genre.mal_id}/>)
              }
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
import HomeHeader from "../../components/home/header";
import { useGetTopAnimeQuery, useGetTopMangaQuery } from "../../redux/api/jikan.api";
import ItemCard from "../../components/item-card";
import HomeSection from "../../components/home/section";
import LoadingComponent from "../../components/loading";

export default function Home() {
  const {data : topAnimeData, isLoading : topAnimeIsLoading} = useGetTopAnimeQuery({type:'tv',filter: 'airing', limit: 10})
  const {data : topMangaData, isLoading : topMangaIsLoading} = useGetTopMangaQuery({filter: 'publishing', limit: 10})
  
  return (
    <>
    <header>
      <HomeHeader/>
    </header>
    <main className="px-4 xl:px-10 py-4 ">
      <HomeSection title={'Top anime ongoing'}>
        {
          topAnimeIsLoading ? <LoadingComponent/> :
          topAnimeData?.map((item) => <ItemCard key={item.mal_id} item={item}/>)
        }
      </HomeSection>
      <HomeSection title={'Top manga ongoing'}>
        {
          topMangaIsLoading ? <LoadingComponent/> : 
          topMangaData?.map((item) => <ItemCard key={item.mal_id} item={item}/>)
        }
      </HomeSection>
    </main>
  </>
)
}

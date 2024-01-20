import { Text2 } from "../../components/ui/text";
import HomeHeader from "../../components/home/header";
import { useGetTopAnimeQuery } from "../../redux/api/jikan.api";
import ItemCard from "../../components/item-card";

export default function Home() {
  const {data, isLoading} = useGetTopAnimeQuery(1)
  
  return (
  <>
    <header>
      <HomeHeader/>
    </header>
    <main className="px-10 xl:px-20 py-4 ">
      <section>
        <Text2 className="text-xl font-semibold" >Top anime</Text2>
        <ItemCard/>
      </section> 
    </main>
  </>
)
}

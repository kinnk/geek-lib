import { useEffect, useState } from "react";
import HeaderTitle from "../header-title";
import { useGetTopAnimeQuery } from "../../../redux/api/jikan.api";
import LoadingComponent from "../../loading";

export default function HomeHeader() {
  const {data, isLoading} = useGetTopAnimeQuery({rating:''});
  const [currentHeader, setCurrentHeader] = useState(0);
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      if(currentHeader < 4){
        setCurrentHeader(num => num + 1);
      }else setCurrentHeader(()=> 0)
    }, 6000)
    return () => clearInterval(interval)
  },[currentHeader])

  return (
    <>
      {
        isLoading ? <LoadingComponent h={95}/> : <HeaderTitle data= {data[currentHeader]}/>
      }
    </>
  )
}

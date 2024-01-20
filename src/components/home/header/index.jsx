import { useEffect, useState } from "react";
import HeaderTitle from "../header-title";
import { useGetTopAnimeQuery } from "../../../redux/api/jikan.api";

export default function HomeHeader() {
  const {data, isLoading} = useGetTopAnimeQuery();
  const [currentHeader, setCurrentHeader] = useState(0);
  console.log(!isLoading && data)
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
        !isLoading && <HeaderTitle data= {data[currentHeader]}/>
      }
    </>
  )
}


export default function HeaderTitle({ data  }) {
  const synopsis = data?.synopsis.split(' ').slice(0, 40).join(' ') + ' ...';

  return (
    <div className=" w-screen h-screen relative"> 
      <img src={data?.images.jpg.large_image_url} alt="" className="w-full h-full object-cover object-center"/>
      <div className="absolute z-10 bottom-0 left-0 w-full h-full bg-black opacity-60 dark:opacity-80 ">
        <div className="absolute bottom-24 left-0 px-10 xl:px-20 w-11/12 xl:w-2/3 container">
          <h2 className="text-white text-2xl font-medium">
            {data?.title}
          </h2>
          <p className="text-slate-400">
            {synopsis}
          </p>
        </div>
      </div>
    </div>  
  )
}

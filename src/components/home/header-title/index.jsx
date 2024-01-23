
export default function HeaderTitle({ data  }) {
  const synopsis = data?.synopsis.split(' ').slice(0, 40).join(' ') + ' ...';

  return (
    <div className=" w-screen h-[95vh] relative"> 
      <img src={data?.images.jpg.large_image_url} alt="" className="w-full h-full object-cover object-center"/>
      <div className="absolute bottom-0 left-0 w-full h-full flex items-end bg-[#ffffff40] dark:bg-[#00000080] ">
        <div className="w-full pb-5 pt-2 px-4 xl:px-10 space-y-1 bg-[#ffffff85] dark:bg-[#00000085]">
          <h2 className="textClr text-3xl lg:text-4xl xl:text-6xl font-bold">
            {data?.title}
          </h2>
          <p className="textClr text-lg">
            {synopsis}
          </p>
        </div>
      </div>
    </div>  
  )
}

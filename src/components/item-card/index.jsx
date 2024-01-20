import img from '../../assets/test.jpg'
export default function ItemCard() {
  return (
    <>
      <div className='relative w-[225px] overflow-hidden rounded-md drop-shadow-xl'> 
        <img src={img} alt="" className='w-full h-[320px] duration-300 hover:scale-110 object-contain '/>
        <div className='absolute top-0 left-0 w-full p-1 flex items-center justify-between'>
          <span className='bg-cyan-200 px-2 rounded-xl opacity-90'>
            9.6
          </span>
          <span className='bg-cyan-200 px-2 rounded-xl opacity-90'>
            9.6
          </span>
        </div>
      </div>
    </>
  )
}

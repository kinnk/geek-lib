
export default function HomeSection({title, children}) {
  return (
    <section className="py-5"> 
      <h2 className="textClr text-3xl font-semibold text-center mb-4">{title}</h2>
      <div className="overflow-hidden">
        <div className={`flex gap-x-4 justify-start overflow-x-scroll pb-2`}>
          {children}
        </div>
      </div>
  </section> 
  )
}

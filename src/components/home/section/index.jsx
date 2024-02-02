
import { PropTypes } from 'prop-types';
export default function HomeSection({title, children}) {
  return (
    <section className="py-2 px-2 mb-5"> 
      <div>
        <h2 className="textClr text-2xl font-semibold text-center mb-2">{title}</h2>
      </div>
      <div className="overflow-hidden">
        <div className={`flex gap-x-4 justify-start overflow-x-scroll pb-2`}>
          {children}
        </div>
      </div>
  </section> 
  )
}


HomeSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
}
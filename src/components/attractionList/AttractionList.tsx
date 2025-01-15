import { Link } from 'react-router'
import { IItem } from 'types/item'

export const AttractionList = ({ attrList = [] }) => {
  return (
    <>
      {attrList.map((item: IItem) => (
        <article className='card' key={item.id}>
          <div className='card__img'>
            <img src={item.image} alt={item.title} />
          </div>
          <p className='card__price'>{item.price}</p>

          <h3 className='h3-title'>{item.title}</h3>
          <p className='card__desc'>{item.description}</p>
          <Link to={''}>Узнать подробнее</Link>
        </article>
      ))}
    </>
  )
}

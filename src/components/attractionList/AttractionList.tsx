import { FC } from 'react'
import { Link } from 'react-router'
import { IItem } from 'types/item'
interface AttractionListProps {
  data: IItem[] | undefined
}
export const AttractionList: FC<AttractionListProps> = ({ data = [] }) => {
  console.log(data)

  return (
    <>
      {data?.length
        ? data?.map((item: IItem) => (
            <article className='card' key={item.id}>
              <div className='card__img'>
                <img src={item.image} alt={item.title} />
              </div>
              <p className='card__price'>{item.price}</p>

              <h3 className='h3-title'>{item.title}</h3>
              <p className='card__desc'>{item.description}</p>
              <Link to={''}>Узнать подробнее</Link>
            </article>
          ))
        : 'Not Found'}
    </>
  )
}

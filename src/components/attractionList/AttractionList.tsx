import { FC } from 'react'
import { Link, useSearchParams } from 'react-router'
import { IItem } from 'types/item'

interface AttractionListProps {
  data: IItem[] | []
  inpText: string | ''
}

export const AttractionList: FC<AttractionListProps> = ({ data = [] }) => {
  const [searchParams] = useSearchParams()
  const sortBy = searchParams.get('sort') || 'alphabet'

  const sortedData = [...data].sort((a: any, b: any) => {
    if (sortBy === 'alphabet') {
      return a.title.localeCompare(b.title)
    } else if (sortBy === 'alphabet-reverse') {
      return b.title.localeCompare(a.title)
    } else if (sortBy === 'famous') {
      return String(b.popularity).localeCompare(String(a.popularity))
    } else if (sortBy === 'price-up') {
      return a.price.localeCompare(b.price)
    } else if (sortBy === 'price-down') {
      return b.price.localeCompare(a.price)
    }
  })

  return (
    <>
      {data.length ? (
        sortedData.map((item: IItem) => (
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
      ) : (
        <div>Not Found</div>
      )}
    </>
  )
}

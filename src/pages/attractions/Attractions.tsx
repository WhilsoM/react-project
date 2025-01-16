import { AttractionFilter } from 'components/attractionFilter/AttractionFilter'
import { AttractionList } from 'components/attractionList/AttractionList'
import { AttractionSort } from 'components/attractionSort/AttractionSort'
import { AttrSkeleton } from 'components/skeletons/AttrSkeleton'
import { useItems } from 'hooks/useItems'
import './attractions.scss'

const lenSkeleton = [1, 2, 3, 4]

const isAuth = true

export const Attractions = () => {
  const { data, isLoading } = useItems(isAuth)

  return (
    <section className='attractions'>
      <div className='container'>
        <div className='attractions__info'>
          <h1 className='section-title'>Достопримечательности</h1>
          <h4 className='attractions__subtitle'>Санкт-Петербурга</h4>
          <div className='border-line-red'></div>

          <input type='text' placeholder='Поиск...' className='attractions__input' />

          <AttractionSort />

          <AttractionFilter />
        </div>

        <section id='content' className='attractions__cards'>
          {isLoading && lenSkeleton.map((_, i: number) => <AttrSkeleton key={i} />)}

          {!isLoading && <AttractionList data={data} />}
        </section>
      </div>
    </section>
  )
}

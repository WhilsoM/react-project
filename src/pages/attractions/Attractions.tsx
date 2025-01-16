import { AttractionList } from 'components/attractionList/AttractionList'
import { AttrSkeleton } from 'components/skeletons/AttrSkeleton'
import { useItems } from 'hooks/useItems'
import './attractions.scss'

const lenSkeleton = [1, 2, 3, 4]

const isAuth = true

export const Attractions = () => {
  // const { item } = useItem('1')

  const { data, isLoading } = useItems(isAuth)

  return (
    <section className='attractions'>
      <div className='container'>
        <div className='attractions__info'>
          <h1 className='section-title'>Достопримечательности</h1>
          <h4 className='attractions__subtitle'>Санкт-Петербурга</h4>
          <div className='border-line-red'></div>

          <input type='text' placeholder='Поиск...' className='attractions__input' />

          <select name='sort' id='sorting'>
            <option className='sorting__option' value='alphabet'>
              По алфавиту (А-Я)
            </option>
            <option className='sorting__option' value='famous'>
              По популярности
            </option>
            <option className='sorting__option' value='price-up'>
              По цене (по возрастанию)
            </option>
            <option className='sorting__option' value='price-down'>
              По цене (по убыванию)
            </option>
          </select>

          <div className='categories'>
            <button value='all'>Все</button>
            <button value='музей'>музеи</button>
            <button value='храмы'>храмы</button>
            <button value='лесопарки'>лесопарки</button>
          </div>
        </div>

        <section id='content' className='attractions__cards'>
          {isLoading && lenSkeleton.map((_, i: number) => <AttrSkeleton key={i} />)}

          {!isLoading && <AttractionList data={data} />}
        </section>
      </div>
    </section>
  )
}

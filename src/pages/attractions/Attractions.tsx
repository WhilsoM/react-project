import { useQuery } from '@tanstack/react-query'
import { AttractionList } from 'components/attractionList/AttractionList'
import { AttrSkeleton } from 'components/skeletons/AttrSkeleton'
import { useEffect } from 'react'
import './attractions.scss'

const lenSkeleton = [1, 2, 3, 4]

export const Attractions = () => {
  // const [isLoading, setIsLoading] = useState(false)
  // const [attrList, setAttrList] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      // setIsLoading(true)
      const response = await fetch('https://6729edd66d5fa4901b6f05f6.mockapi.io/items')
      return response.json()

      // const data = await response.json()
      // setAttrList(data)
    } catch (error) {
      console.error(error)
    } finally {
      // setIsLoading(false)
    }
  }

  const { data, isLoading } = useQuery({
    queryKey: ['items'],
    queryFn: fetchData,
  })

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

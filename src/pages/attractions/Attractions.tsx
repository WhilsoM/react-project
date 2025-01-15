import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import './attractions.scss'

interface IItems {
  image: string
  title: string
  price: string
  description: string
  id: string
}

export const Attractions = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [attrList, setAttrList] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setIsLoading(true)

      const response = await fetch('https://6729edd66d5fa4901b6f05f6.mockapi.io/items')

      const data = await response.json()

      setAttrList(data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

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

        {isLoading && <div className='loader'></div>}

        <section id='content' className='attractions__cards'>
          {!isLoading &&
            attrList.map((item: IItems) => (
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
        </section>
      </div>
    </section>
  )
}

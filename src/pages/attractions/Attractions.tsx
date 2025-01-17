import { AttractionFilter } from 'components/attractionFilter/AttractionFilter'
import { AttractionList } from 'components/attractionList/AttractionList'
import { AttractionSort } from 'components/attractionSort/AttractionSort'
import { AttrSkeleton } from 'components/skeletons/AttrSkeleton'
import { useItems } from 'hooks/useItems'
import { useState } from 'react'
import { useSearchParams } from 'react-router'
import './attractions.scss'

const lenSkeleton = [1, 2, 3, 4]

export const Attractions = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [value, setValue] = useState(searchParams.get('search') || '')
  const sortBy = searchParams.get('sort') || ''

  let currentPage = 1

  const { data, isLoading } = useItems(currentPage, sortBy, value)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    setSearchParams({ search: newValue })
  }
  return (
    <section className='attractions'>
      <div className='container'>
        <div className='attractions__info'>
          <h1 className='section-title'>Достопримечательности</h1>
          <h4 className='attractions__subtitle'>Санкт-Петербурга</h4>
          <div className='border-line-red'></div>

          <input
            type='text'
            placeholder='Поиск...'
            className='attractions__input'
            value={value}
            onChange={handleSearchChange}
          />

          <AttractionSort />

          <AttractionFilter />
        </div>

        <section className='attractions__cards'>
          {isLoading && lenSkeleton.map((_, i: number) => <AttrSkeleton key={i} />)}

          {!isLoading && <AttractionList data={data} />}
        </section>
      </div>
    </section>
  )
}

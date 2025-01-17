import { useSearchParams } from 'react-router'

export const AttractionSort = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSortChange = (value: string) => {
    setSearchParams({ sort: value })
  }

  return (
    <select
      name='sort'
      id='sorting'
      onChange={(e) => handleSortChange(e.target.value)}
      defaultValue={searchParams.get('sort') || 'alphabet'}
    >
      <option className='sorting__option' value='alphabet'>
        По алфавиту (А-Я)
      </option>
      <option className='sorting__option' value='alphabet-reverse'>
        По алфавиту (Я-А)
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
  )
}

export const AttractionSort = () => {
  return (
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
  )
}

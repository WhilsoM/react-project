import s from './attractionFilter.module.scss'

export const AttractionFilter = () => {
  return (
    <div className={s.categories}>
      <button value='all'>Все</button>
      <button value='музей'>музеи</button>
      <button value='храмы'>храмы</button>
      <button value='лесопарки'>лесопарки</button>
    </div>
  )
}

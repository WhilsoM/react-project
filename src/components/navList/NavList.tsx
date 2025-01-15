import { NavLink } from 'react-router'
import './navlist.scss'

export const NavList = () => {
  return (
    <nav>
      <ul className={'nav_list'}>
        <li>
          <NavLink to={'/'} className={'nav_list__link'}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to={'/attractions'} className={'nav_list__link'}>
            Достопримечательности
          </NavLink>
        </li>
        <li>
          <NavLink to={'/contacts'} className={'nav_list__link'}>
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

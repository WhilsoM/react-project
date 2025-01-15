import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router'
import s from './header.module.scss'
import logo from '/logo.svg'
import moon from '/moon.svg'
import sun from '/sun.svg'

import { NavList } from 'components/navList/NavList'
import { useEffect, useState } from 'react'
import { darkTheme } from 'store/darkTheme.store'

export const Header = observer(() => {
  const [theme, setTheme] = useState('sun')

  useEffect(() => {
    if (theme === 'sun') {
      document.body.classList.add('white-theme')
      document.body.classList.remove('dark-theme')
    } else if (theme === 'moon') {
      document.body.classList.remove('white-theme')
      document.body.classList.add('dark-theme')
    }
  }, [theme])

  const changeIcons = () => {
    if (theme === 'sun') {
      darkTheme.changeTheme(theme)
      console.log(darkTheme.getIcon())

      return setTheme('moon')
    }

    darkTheme.changeTheme(theme)
    console.log(darkTheme.getIcon())

    return setTheme('sun')
  }

  return (
    <header className={`${s.header} ${theme === 'sun' ? 'white-theme' : 'dark-theme'}`}>
      <div className={s.container}>
        <div className={s.header__wrapper}>
          <div className={s.logo}>
            <img src={logo} alt='turneo logo' />
          </div>

          <NavList />
        </div>

        <div className={s.header__wrapper}>
          <div className={s.theme}>
            <button onClick={changeIcons}>
              <img src={theme === 'sun' ? sun : moon} alt={theme} className={s.theme__icon} title='сменить тему' />
            </button>
          </div>

          <div className={s.menu}>
            <input type={'checkbox'} id={'burger-checkbox'} className={s.burger_checkbox} />

            <label id='burger-checkbox' className='burger'></label>
            <ul className='menu-list'>
              <li>
                <NavLink to={'/'} className='menu-item'>
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink to={'attractions'} className='menu-item'>
                  Достопримечательности
                </NavLink>
              </li>
              <li>
                <NavLink to={'contacts'} className='menu-item'>
                  Контакты
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
})

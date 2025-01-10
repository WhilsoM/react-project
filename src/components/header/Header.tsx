import { NavLink } from 'react-router'
import s from './header.module.scss'
import logo from '/logo.svg'

export const Header = () => (
	<header className={s.header}>
		<div className='container'>
			<div className={s.header__wrapper}>
				<div className={s.logo}>
					<img src={logo} alt='turneo logo' />
				</div>

				<nav>
					<ul className={s.nav_list}>
						<li>
							<NavLink to={''} className={s.nav_list__link}>
								Главная
							</NavLink>
						</li>
						<li>
							<NavLink to={'/attractions'} className={s.nav_list__link}>
								Достопримечательности
							</NavLink>
						</li>
						<li>
							<NavLink to={'/contacts'} className={s.nav_list__link}>
								Контакты
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>

			<div className={s.header__wrapper}>
				<div className={s.theme}>
					<button>
						<img
							src='./assets/img/sun.svg'
							alt='sun'
							className={s.theme__icon}
							title='сменить тему'
						/>
					</button>
				</div>

				<div className={s.menu}>
					<input
						type='checkbox'
						id='burger-checkbox'
						className={s.burger_checkbox}
					/>

					<label id='burger-checkbox' className='burger'></label>
					<ul className='menu-list'>
						<li>
							<NavLink to={'/'} className='menu-item'>
								Главная
							</NavLink>
						</li>
						<li>
							<NavLink
								to={'./assets/pages/attractions.html'}
								className='menu-item'
							>
								Достопримечательности
							</NavLink>
						</li>
						<li>
							<NavLink
								to={'./assets/pages/contacts.html'}
								className='menu-item'
							>
								Контакты
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
)

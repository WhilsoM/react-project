import { useState } from 'react'
import { Link } from 'react-router'
import s from './footer.module.scss'
import logo from '/logo.svg'

export const Footer = () => {
	const [btnValue, setBtnValue] = useState('отправить')
	const [error, setError] = useState('')
	const [inpValue, setInpValue] = useState('')

	const mailSend = (e: any) => {
		e.preventDefault()

		if (btnValue === 'отправлено! 🎉') return

		if (validateEmail(inpValue)) {
			setBtnValue('отправлено! 🎉')

			setError('')
		} else {
			setError('Заполните почту правильно!')

			setTimeout(() => {
				setError('')
			}, 3000)

			return
		}
	}

	const validateEmail = (email: string) =>
		email.length > 0 && email.includes('@')

	return (
		<footer className={s.footer}>
			<div className='container'>
				<div className={s.footer__wrapper}>
					<div className={s.footer__row_one}>
						<img className={s.footer__img} src={logo} alt='logo' />

						<p className={s.footer__desc}>
							Путеводитель по городу Санкт-Петербург.
						</p>

						<div className={s.footer__border_line}></div>

						<p className={s.error}>{error}</p>
						<form action='#'>
							<input
								type='email'
								placeholder='почта...'
								onInput={(e: any) => setInpValue(e.target.value)}
								value={inpValue}
							/>
							<button
								onClick={(e) => mailSend(e)}
								className={`btn ${
									btnValue === 'отправлено! 🎉' ? 'success' : ''
								}`}
							>
								{btnValue}
							</button>
						</form>
					</div>

					<div className={s.footer__row_two}>
						<h3>Contact Info</h3>
						<div className={s.footer__border_line}></div>

						<div className={s.row_two__email}>
							<h4>Почта</h4>
							<Link to={'mailto:tatsveet@gmail.com'}>tatsveet@gmail.com</Link>
						</div>

						<div className={s.row_two__phone}>
							<h4>Телефон</h4>
							<Link to={'tel:+79870689005'}>+79870689005</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={s.footer__wrapper_2}>
				<p>© 2024 Copyright by Arthur Akhmetov</p>
			</div>
		</footer>
	)
}

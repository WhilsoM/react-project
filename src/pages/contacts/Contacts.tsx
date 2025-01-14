import { useState } from 'react'
import { Link } from 'react-router'
import { darkTheme } from 'store/darkTheme.store'
import './contacts.scss'

export const Contacts = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<section className='contacts'>
			<div className='container'>
				<h2 className='section-title'>Наши контакты</h2>
				<p className='phone'>
					<span>рабочий телефон:</span>
					<Link to={'tel:+79870689005'}>+79870689005</Link>
				</p>
				<p className='email'>
					<span>рабочая почта:</span>
					<Link to={'mailto:tatsveet@gmail.com'}>tatsveet@gmail.com</Link>
				</p>

				<button type='button' className='btn' onClick={() => setIsOpen(true)}>
					Связаться с нами
				</button>

				{isOpen && (
					<div id='myModal' className={'modal'}>
						<div
							className={`modal-content  ${
								darkTheme.getIcon() === 'sun' ? 'white-theme' : 'dark-theme'
							}`}
						>
							<form action='#' id='form'>
								<label>
									<span>Ваша почта:</span>
									<input type='email' id='email' name='email' />
								</label>

								<label>
									<span>Ваш телефон:</span>
									<input type='tel' id='tel' name='phone' />
								</label>

								<button
									className='btn'
									id='send'
									onClick={() => setIsOpen(false)}
								>
									Отправить
								</button>
							</form>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

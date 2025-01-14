import { Link } from 'react-router'

export const Contacts = () => {
	return (
		<section className='contacts'>
			<div className='container'>
				<h2 className='section-title'>Наши контакты</h2>
				<p className='phone'>
					рабочий телефон: <Link to={'tel:+79870689005'}>+79870689005</Link>
				</p>
				<p className='email'>
					рабочая почта:
					<Link to={'mailto:tatsveet@gmail.com'}>tatsveet@gmail.com</Link>
				</p>

				<button type='button' className='btn'>
					Связаться с нами
				</button>

				<div id='myModal' className='modal'>
					<div className='modal-content'>
						<form action='#' id='form'>
							<label>
								Ваша почта:
								<input type='email' id='email' name='email' />
							</label>

							<label>
								Ваш телефон:
								<input type='tel' id='tel' name='phone' />
							</label>

							<button className='btn' id='send'>
								Отправить
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

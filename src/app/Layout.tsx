import { Footer } from 'components/footer/Footer'
import { Header } from 'components/header/Header'
import { Outlet } from 'react-router'
import 'styles/index.scss'

export const Layout = () => {
	return (
		<>
			<Header />

			{/* основной контент страниц */}
			<main className='main'>
				<Outlet />
			</main>

			<Footer />
		</>
	)
}

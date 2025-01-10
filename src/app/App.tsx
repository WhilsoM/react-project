import { Attractions } from 'pages/attractions/Attractions'
import { Home } from 'pages/home/Home'
import { Route, Routes } from 'react-router'
import { Layout } from './Layout'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='attractions' element={<Attractions />} />
					<Route path='contacts' element={<Home />} />

					<Route path='template/<::id>' element={<Home />} />
				</Route>
			</Routes>
		</>
	)
}

export default App

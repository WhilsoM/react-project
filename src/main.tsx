import App from 'app/App.tsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import 'styles/index.scss'

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)

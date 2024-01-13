import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import FavouritePage from './pages/FavouritePage'
import HomePage from './pages/HomePage'

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/favorites' element={<FavouritePage />} />
			</Routes>
		</>
	)
}

export default App

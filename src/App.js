import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './scss/app.scss'

import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/filterSlice'

export const AppContext = React.createContext('')

function App() {
	const [searchValue, setSearchValue] = React.useState('')

	const count = useSelector((state) => state.counter.count)
	const dispatch = useDispatch()

	return (
		<div className='wrapper'>
			<div>
				<button
					aria-label='Increment value'
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<span>{count}</span>
				<button
					aria-label='Decrement value'
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
			</div>

			<AppContext.Provider
				value={{
					searchValue,
					setSearchValue,
				}}
			>
				<Header />

				<div className='content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</AppContext.Provider>
		</div>
	)
}

export default App

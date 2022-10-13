import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home'
import Detail from './pages/Detail'

//Styles
import './styles/global.css'


const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Home/>}/>
				<Route exact path='/detail' element={<Detail/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
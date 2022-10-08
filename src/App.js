import React from 'react';
import './App.css';
import { Films } from './Films/Films';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Nav } from './Nav/Nav';
import { Characters } from './Characters/Characters';
import { Routes, Route } from 'react-router-dom';
import { Film } from './Films/Film/Film';

function App() {

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={[<Nav />, <Main />]} />
				<Route path='/films' element={<Films />}/>
				<Route path='/characters' element={<Characters />} />
				<Route path='/dr-strange2' element={<Film keyFilm='drStrange2'/>} />
				<Route path='/moon-knight' element={<Film keyFilm='moonKnight'/>} />
				<Route path='/spider-man3' element={<Film keyFilm='spiderMan3' />} />
			</Routes>
		</>
	)
}

export default App;



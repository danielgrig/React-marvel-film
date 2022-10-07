import React, { useState } from 'react';
import './App.css';
import { Films } from './Films/Films';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Nav } from './Nav/Nav';
import { Characters } from './Characters/Characters';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={[<Nav />, <Main />]} />
				<Route path='/films' element={<Films />}/>
				<Route path='/characters' element={<Characters />} />
			</Routes>
		</>
	)
}

export default App;



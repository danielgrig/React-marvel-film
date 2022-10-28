import React from 'react';
import './App.css';
import { Films } from './Films/Films';
import { Header} from './Header/Header';
import { Main } from './Main/Main';
import { Nav } from './Nav/Nav';
import { Characters } from './Characters/Characters';
import { Routes, Route } from 'react-router-dom';
import { Film } from './Films/Film/Film';
import { Comics } from './Comics/Comics';


function App() {

	return (
		<>
			<Header />
				<Routes>
					<Route path='/' element={[<Nav />, <Main />]} />
					<Route path='/films' element={<Films />}/>
					<Route path='/film/:id' element={<Film />} />
					<Route path='/characters' element={<Characters />} />
					<Route path='/comics' element={<Comics />} />
				</Routes>
		</>
	)
}

export default App;



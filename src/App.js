import React, { useState }  from 'react';
import './App.css';
import { Films } from './Films/Films';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Nav } from './Nav/Nav';

function App() {
const [content, setContent] = useState(true)

	return (
		<>
			<Header func={setContent} />
			{content ? [<Nav func={setContent} />,<Main />] : <Films />}
			
		</>
		)
}

export default App;



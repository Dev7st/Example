import { Route, Routes } from 'react-router-dom';
import Homepage from './page/Homepage.js';
import LoginPage from './page/LoginPage.js';

function App() {

	return(
		<>
			<Routes>
				<Route path='/:id' element={<Homepage/>}></Route>
				<Route path='/login' element={<LoginPage/>}></Route>
			</Routes>
		</>
	);
}

export default App;
import './App.scss';

import Home from './Pages/Home';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from "react-router-dom";
import BookPage from './Pages/BookPage';
import CategoryPage from './Pages/CategoryPage';

function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path='/home' element={<Home />} />
					<Route path='/' element = {<Navigate replace to="/home" />} />
					{/* <Route path='/category'>
						<Route path=':categoryId' element = {<CategoryPage />} />
					</Route> */}

					<Route path ="/category/:categoryId" element = {<CategoryPage />} />
					<Route path='/books/:id' element = {<BookPage />} />
					<Route path='*' element = {<Navigate replace to="/home" />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App;

import './App.css';
import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { HomePage} from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import {Routes, Route, Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

	  <Routes>
		<Route path="/" element={<HomePage />} />
		{/* Absolute pathing: */}
		{/* 
		<Route path="/about" element={<AboutPage />} />
		<Route path="/about/contact" element={<ContactPage />} /> 
		*/}

		{/* Relative pathing: */}
		<Route path="about" element={<Outlet />} >

			{/* Path: /about/ */}
			<Route index element={<AboutPage />} />

			{/* Path: /about/contact */}
			<Route path="contact" element={<ContactPage />} />
		</Route>



	  </Routes>

	  <h6>Footer goes here</h6>
    </div>
  );
}

export default App;

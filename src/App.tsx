import React, { useState } from 'react';
import Map from './pages/Map';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

//  gdg API_KEY = AIzaSyBZCD75cek2dXkaT-NmATV4jCLg7rX3-rc

function App(): JSX.Element {
	return (
		<div className=''>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/' element={<Map />} />
			</Routes>
		</div>
	);
}

export default App;

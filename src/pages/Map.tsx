import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
	width: '100%',
	height: '100%',
};

function Map(): JSX.Element {
	const [map, setMap] = React.useState(null);
	const [coord, setCoord] = useState({
		lat: -4.322447,
		lng: 15.307045,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		!isNaN(parseFloat(e.target.value))
			? setCoord({ ...coord, [e.target.name]: parseFloat(e.target.value) })
			: null;
	};

	return (
		<>
			<div className='flex flex-1 flex-col sm:flex-row items-center'>
				<form className='w-96 p-8 m-4 '>
					<p className='text-lg font-bold text-cyan-600'>
						Enter the coordinates
					</p>
					<div className='w-full my-4 flex flex-col items-start'>
						<label htmlFor=''>lat</label>
						<input
							type='text'
							name='lat'
							value={coord.lat}
							onChange={handleChange}
							className='w-full p-2 my-2 rounded-md bg-slate-200 border-2 text-cyan-800 font-bold border-slate-500 outline-none'
						/>
					</div>
					<div className='w-full my-4 flex flex-col  items-start'>
						<label htmlFor=''>Lng</label>
						<input
							type='text'
							name='lng'
							value={coord.lng}
							onChange={handleChange}
							className='w-full p-2 my-2 rounded-md bg-slate-200 border-2 text-cyan-800 font-bold border-slate-500 outline-none'
						/>
					</div>
				</form>
				<div className='w-96 sm:w-full  h-96 flex items-center justify-center text-white text-2xl font-extrabold sm:h-screen bg-slate-600'>
					{/* Google Map here */}
					<LoadScript
						googleMapsApiKey={import.meta.env.VITE_GOOGLE_KEY}
						loadingElement={<p>loading ...</p>}
					>
						<GoogleMap
							mapContainerStyle={containerStyle}
							center={coord}
							zoom={4}
						></GoogleMap>
					</LoadScript>
					{/*End Google Map here */}
				</div>
			</div>
		</>
	);
}

export default Map;

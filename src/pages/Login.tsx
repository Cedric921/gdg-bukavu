import React from 'react';
import {GoogleLogin} from 'react-google-login';
import { gapi } from 'gapi-script';

const Login = () => {
	const responseGoogle = (response: any) => {
		console.log(response);
	};

	return (
		<div className='flex flex-1 items-center justify-center w-screen h-screen'>
			<GoogleLogin
				clientId='788153552342-gkgingf8gsm5t1osoa7s7otiaca8kvf5.apps.googleusercontent.com'
				buttonText='Login'
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
				cookiePolicy={'single_host_origin'}
			>
				<span> Login with Google</span>
			</GoogleLogin>
			{/* , document.getElementById('googleButton') */}
		</div>
	);
};

export default Login;

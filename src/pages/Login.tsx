import React, {useEffect}from 'react';
import {GoogleLogin} from 'react-google-login';
import { gapi } from 'gapi-script';

const Login = () => {
	const clientId = import.meta.env.VITE_GOOGLE_KEY;

	useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

	const onSuccess = (res:any) => {
        console.log('success', res);
        // navigate("/redirect");
    };

    const onFailure = (err:any) => {
        console.log('failed', err);
    };

	
	return (
		<div className='flex flex-1 items-center justify-center w-screen h-screen'>
			
			<GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
				
		</div>
	);
};

export default Login;

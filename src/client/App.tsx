import React, { useState, useEffect } from 'react';
import NewEndpointPage from './components/New Endpoint';

interface AppProps {}

const App = (props: AppProps) => {
	const [data, setData] = useState('');

	useEffect(() => {
		fetch('http://localhost:3000/api/hello')
			.then(res => res.json())
			.then(data => setData(data.message))
			.catch(e => console.log('[fetch erorr]', e));
	}, []);

	return (
		<div className="mx-auto mt-5 w-25">
			<div className="alert alert-info text-center">Yo {data}</div>
			<div> <NewEndpointPage/></div>
		</div>
		
	);
};

export default App;
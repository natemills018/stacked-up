import React, { useState, useEffect } from 'react';




const NewEndpointPage = () => {
    const [endpoint, setEndpoint] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/api/new-endpoint')
            .then(res => res.json())
            .then(endpoint => setEndpoint(endpoint.message))
            .then(e => console.log('[fetch error]', e));


    }, []);


    return (

        <div className="mx-auto mt-5 w-25">
            <div className="alert alert-secondary text-center">Yo {endpoint}</div>
        </div>
    );

};

export default NewEndpointPage;
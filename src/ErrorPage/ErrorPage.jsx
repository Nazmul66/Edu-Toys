import React from 'react';
import './ErrorPage.css';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error} = useRouteError;
    console.log(error)
    return (
        <div className='error-page'>
            <div>
                <h2>404</h2>
            </div>
        </div>
    );
};

export default ErrorPage;
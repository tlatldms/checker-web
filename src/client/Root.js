import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';

const Root = () => (
    <BrowserRouter
    basename="/checker-web">
        <App/>
    </BrowserRouter>
);

export default Root;
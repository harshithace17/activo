import React from 'react';
import { render } from 'react-dom';
import Routes from './components/Route';


const rootEl = document.getElementById('apps');


render(<Routes />, rootEl);

if (module.hot) {
    module.hot.accept();
}

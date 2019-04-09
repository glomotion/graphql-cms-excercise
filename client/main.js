import React from 'react';
import { render } from 'react-dom';

import 'normalize.css';
import 'client/styles/global.scss';

import App from 'client/components/app/App';

render(<App />, document.querySelector('#root'));

import 'core-js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// redux imports
import { Provider } from 'react-redux'
import { compose, createStore } from 'redux'
import middleware from './middleware'
import { rootReducer } from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    middleware
));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root') as HTMLElement
);

registerServiceWorker();
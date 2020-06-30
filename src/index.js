import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import fbConfig from './config/fbConfig';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(fbConfig),
		reactReduxFirebase(fbConfig, {
			useFirestoreForProfile: true,
			userProfile: 'users',
			attachAuthIsReady: true,
		})
	)
);

store.firebaseAuthIsReady.then(() => {
	ReactDOM.render(
		<>
			<MessengerCustomerChat pageId="108729423937807" appId="669885237106196" />
			<Provider store={store}>
				<App />
			</Provider>
		</>,
		document.getElementById('root')
	);
});

serviceWorker.unregister();

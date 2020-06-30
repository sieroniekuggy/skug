import React from 'react';
import GlobalStyle from './theme/globalStyle';
import SignedIn from './components/layout/SignedIn';
import SignedOut from './components/layout/SignedOut';
import ScrollToTop from './components/effects/ScrollToTop';
import RubberBand from './components/effects/RubberBand';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faGlobe,
	faPhone,
	faEnvelope,
	faUser,
	faComments,
	faUnlock,
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faGlobe, faPhone, faEnvelope, faUser, faComments, faUnlock);

function App(props) {
	const { auth, profile } = props;
	const links = auth.uid ? <SignedIn profile={profile} /> : <SignedOut />;

	return (
		<BrowserRouter>
			<GlobalStyle />
			<ScrollToTop />
			<RubberBand />
			{links}
		</BrowserRouter>
	);
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile,
	};
};

export default connect(mapStateToProps)(App);

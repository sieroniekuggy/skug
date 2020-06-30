import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

const Home = lazy(() => import('../../pages/Home'));
const Websites = lazy(() => import('../../pages/Websites'));
const Stores = lazy(() => import('../../pages/Stores'));
const Graphics = lazy(() => import('../../pages/Graphics'));
const Projects = lazy(() => import('../../pages/Projects'));
const About = lazy(() => import('../../pages/About'));
const BlogSite = lazy(() => import('../../pages/Blog'));
const Contact = lazy(() => import('../../pages/Contact'));
const PrivacyPolicy = lazy(() => import('../../pages/PrivacyPolicy'));
const Price = lazy(() => import('../../pages/Price'));
const PostDetails = lazy(() => import('../posts/PostDetails'));
const ProjectDetails = lazy(() => import('../projects/ProjectDetails'));
const Login = lazy(() => import('../../pages/Login'));
const Error = lazy(() => import('../../pages/Error'));
const Blog = lazy(() => import('../Blog/Blog'));
const Footer = lazy(() => import('../Footer/Footer'));
const Requirements = lazy(() => import('../Requirements/Requirements'));

const StyledLoader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
`;

const renderLoader = () => {
	return (
		<StyledLoader>
			<ClipLoader size={100} color={'#49A9E0'} loading={true} />
		</StyledLoader>
	);
};

const SignedOut = () => (
	<Suspense fallback={renderLoader()}>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/websites" component={Websites} />
			<Route path="/stores" component={Stores} />
			<Route path="/graphics" component={Graphics} />
			<Route path="/projects" component={Projects} />
			<Route path="/about" component={About} />
			<Route path="/blog" component={BlogSite} />
			<Route path="/contact" component={Contact} />
			<Route path="/privacy-policy" component={PrivacyPolicy} />
			<Route path="/price" component={Price} />
			<Route path="/post/:id" component={PostDetails} />
			<Route path="/project/:id" component={ProjectDetails} />
			<Route path="/login" component={Login} />
			<Route component={Error} />
		</Switch>
		<Blog />
		<Requirements />
		<Footer />
	</Suspense>
);

export default SignedOut;

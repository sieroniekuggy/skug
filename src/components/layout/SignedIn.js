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
const Error = lazy(() => import('../../pages/Error'));
const Admin = lazy(() => import('../../pages/Admin'));
const Blog = lazy(() => import('../Blog/Blog'));
const Footer = lazy(() => import('../Footer/Footer'));
const Requirements = lazy(() => import('../Requirements/Requirements'));
const CreatePost = lazy(() => import('../posts/CreatePost'));
const CreateProject = lazy(() => import('../projects/CreateProject'));

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

const SignedIn = (props) => {
	const { profile } = props;

	return (
		<Suspense fallback={renderLoader()}>
			<Switch>
				<Route
					exact
					path="/"
					component={(props) => <Home {...props} profile={profile} />}
				/>
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
				<Route
					path="/admin"
					component={(props) => <Admin {...props} profile={profile} />}
				/>
				<Route
					path="/create-post"
					component={(props) => <CreatePost {...props} profile={profile} />}
				/>
				<Route path="/create-project" component={CreateProject} />
				<Route component={Error} />
			</Switch>
			<Blog></Blog>
			<Requirements></Requirements>
			<Footer></Footer>
		</Suspense>
	);
};

export default SignedIn;

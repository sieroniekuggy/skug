import React from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PostList from '../components/posts/PostList';

const StyledBlog = styled.section`
	.sites__desc {
		width: 100%;
		margin-bottom: 50px;
	}

	.blog__background {
		width: 100%;
		height: 225px;
		position: relative;
		overflow: hidden;
		border-radius: 6px;
		box-shadow: 0 36px 64px 0 rgba(0, 0, 0, 0.2);
		object-fit: cover;
	}

	.blog__title--hide-on-site,
	.blog__author--hide-on-site {
		display: none;
	}

	.blog__title--hide-on-component {
		font-size: 24px;
		font-weight: 600;
		margin-bottom: 1rem;
		text-align: justify;
	}

	.blog__author--hide-on-component {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.blog__wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 50px;
	}

	.blog__author--flex {
		margin-left: 0.5rem;
	}

	.blog__name {
		font-weight: 500;
	}

	.blog__date {
		font-size: 14px;
		color: #7f7f7f;
	}

	@media screen and (max-width: 900px) {
		.blog__wrapper {
			grid-gap: 50px !important;

			a {
				&:nth-of-type(4),
				&:nth-of-type(5),
				&:nth-of-type(6) {
					display: block !important;
				}
			}
		}
	}
`;

const Blog = props => {
	const { posts } = props;
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledBlog className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title rubber-band">Blog</h1>
						<div className="sites__wrapper">
							<p className="sites__desc">
								Check the posts on our blog! There are
								<b> {posts ? posts.length : 'some'}</b> of them to read.
							</p>
							<PostList posts={posts}></PostList>
						</div>
					</div>
				</div>
			</StyledBlog>
		</>
	);
};

const mapStateToProps = state => {
	return {
		posts: state.firestore.ordered.posts
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: 'posts', orderBy: ['createdAt', 'desc'] }])
)(Blog);

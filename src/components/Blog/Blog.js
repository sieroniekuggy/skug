import React from 'react';
import styled from 'styled-components';
import stairsdown from '../../images/decorations/stairsdown.svg';
import pyramidup from '../../images/decorations/pyramidup.svg';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PostList from '../posts/PostList';

const StyledBlog = styled.section`
	position: relative;
	background: #fbfbfb;
	display: flex;
	flex-direction: column;

	.blog {
		margin: 80px 0;

		h1 {
			margin-bottom: 50px;
			width: 40%;
		}

		&__wrapper {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 30px;
		}

		&__box {
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			flex-direction: column;
			background: #fff;
			border-radius: 5px;
			padding: 15px;
			border: 2px solid #49a9e0;
			transition: 0.2s ease-in-out;
			max-height: 231px;
			min-height: 231px;

			&:hover {
				transition: 0.2s ease-in-out;
				box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
			}
		}

		&__author {
			align-self: flex-start;
			display: flex;
			justify-content: center;
			align-items: center;

			&--flex {
				margin-left: 0.5rem;
			}

			&--hide-on-component {
				display: none;
			}

			&--hide-on-site {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		&__name,
		&__date {
			font-weight: 500;
		}

		&__date {
			font-size: 14px;
			color: #7f7f7f;
		}

		&__title {
			font-size: 24px;
			font-weight: 600;
			margin: 1rem 0;
			text-align: justify;

			&--hide-on-component {
				display: none;
			}
		}

		&__desc {
			text-align: justify;
			overflow: hidden;
		}

		&__background {
			display: none;
		}

		&__overlay {
			&--wrapper {
				display: none;
			}
		}
	}

	.decoration {
		bottom: 0px;

		&__pyramidup {
			bottom: -2px;
		}
	}
`;

const Blog = (props) => {
	const { posts } = props;
	return (
		<StyledBlog>
			<img
				loading="lazy"
				className="decoration decoration--blog"
				src={stairsdown}
				alt="decoration"
			/>
			<div className="blog">
				<div className="container">
					<h1 className="section__title">
						Here are the latest posts from our blog
					</h1>
					<PostList posts={posts}></PostList>
				</div>
			</div>
			<img
				loading="lazy"
				className="decoration decoration__pyramidup"
				src={pyramidup}
				alt="decoration"
			/>
		</StyledBlog>
	);
};

const mapStateToProps = (state) => {
	return {
		posts: state.firestore.ordered.posts,
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'posts', limit: 6, orderBy: ['createdAt', 'desc'] },
	])
)(Blog);

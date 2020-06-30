import React from 'react';
import styled from 'styled-components';
import PostSummary from './PostSummary';
import { Link } from 'react-router-dom';

const StyledPostList = styled.div`
	.post__item {
		transition: 0.2s ease-in-out;

		.blog__title {
			transition: 0.2s ease-in-out;
		}

		&:hover {
			transition: 0.2s ease-in-out;

			.blog__title {
				color: #49a9e0;
				transition: 0.2s ease-in-out;
			}
			.blog__overlay {
				opacity: 1;
			}
		}
	}

	.blog__overlay--wrapper {
		position: relative;
		width: 100%;
		height: 225px;
		overflow: hidden;
		border-radius: 6px;
		box-shadow: 0 36px 64px 0 rgba(0, 0, 0, 0.2);
		object-fit: cover;
		margin: 1rem 0;
	}

	.blog__overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100%;
		width: 100%;
		opacity: 0;
		transition: 0.2s ease-in-out;
		background-image: linear-gradient(to right, #36d1dc, #5b86e5);
	}

	.blog__arrow {
		color: white;
		font-size: 80px;
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		text-align: center;
	}
`;

export default function PostList({ posts }) {
	return (
		<StyledPostList className="blog__wrapper">
			{posts &&
				posts.map(post => {
					return (
						<Link
							data-aos="fade-in"
							data-aos-once="true"
							to={'/post/' + post.id}
							className="post__item"
							key={post.id}
							title={post.title}
						>
							<PostSummary post={post} />
						</Link>
					);
				})}
		</StyledPostList>
	);
}

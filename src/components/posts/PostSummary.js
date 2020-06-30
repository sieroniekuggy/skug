import React from 'react';
import moment from 'moment';

export default function PostSummary({ post }) {
	return (
		<div className="blog__box">
			<div className="blog__author">
				<div className="blog__title blog__title--hide-on-component">
					{post.title}
				</div>
				<div className="blog__author--hide-on-component">
					<img loading="lazy" src={post.authorAvatar} alt="author avatar" />
					<div className="blog__author--flex">
						<p className="blog__name">{post.authorName}</p>
						<p className="blog__date">
							{moment(post.createdAt.toDate()).calendar()}
						</p>
					</div>
				</div>
				<div className="blog__overlay--wrapper">
					<img
						loading="lazy"
						className="blog__background"
						src={post.postBackground}
						alt="post background"
					/>
					<div className="blog__overlay">
						<div className="blog__arrow">→</div>
					</div>
				</div>
				<div className="blog__author--hide-on-site">
					<img loading="lazy" src={post.authorAvatar} alt="author avatar" />
					<div className="blog__author--flex">
						<p className="blog__name">{post.authorName}</p>
						<p className="blog__date">
							{moment(post.createdAt.toDate()).calendar()}
						</p>
					</div>
				</div>
			</div>
			<div className="blog__title blog__title--hide-on-site">{post.title}</div>
			<p className="blog__desc">{post.content}</p>
		</div>
	);
}

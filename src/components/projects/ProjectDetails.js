import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import NavbarOtherSites from '../Navbar/NavbarOtherSites';

const StyledProjectDetails = styled.section`
	.project__container {
		align-items: stretch;
	}

	.project__title {
		align-self: center;
	}

	.project__wrapper {
		align-items: flex-start;

		&--grid {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 30px;
			margin-bottom: 50px;
		}
	}

	.project__info--bold {
		font-weight: 500;
	}

	.project__url,
	.project__review {
		font-size: 14px;
	}

	.project__author {
		margin-left: 0.5rem;
	}

	.project__name {
		font-weight: 500;
	}

	.project__background {
		width: 100%;
		position: relative;
		overflow: hidden;
		border-radius: 6px;
		box-shadow: 0 36px 64px 0 rgba(0, 0, 0, 0.2);
		object-fit: cover;
	}

	.project__content {
		text-align: justify;
		font-size: 18px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.project__client,
	.project__prof {
		font-weight: 500;
	}

	.project__prof {
		font-size: 14px;
		color: #7f7f7f;
	}

	.project__about--wrapper:nth-of-type(2) {
		margin: 1rem 0;
	}
`;

const ProjectDetails = (props) => {
	const { project } = props;

	if (project) {
		return (
			<>
				<NavbarOtherSites></NavbarOtherSites>
				<StyledProjectDetails className="sites__hero">
					<div className="sites__container">
						<div className="container project__container">
							<h1 className="section__title project__title rubber-band">
								{project.projectName}
							</h1>
							<div className="sites__wrapper project__wrapper">
								<div className="project__wrapper--grid">
									<img
										loading="lazy"
										className="project__background"
										src={project.projectBackground}
										alt="project background"
									/>
									<div className="project__about">
										<div className="project__about--wrapper">
											<p className="project__client">{project.projectClient}</p>
											<p className="project__prof">Client</p>
										</div>
										<div className="project__about--wrapper">
											<p className="project__info--bold">Website:</p>
											<a
												href={project.projectURL}
												className="project__url default-link"
												target="_blank"
												rel="noopener noreferrer"
											>
												{project.projectURL}
											</a>
										</div>
										<div className="project__about--wrapper">
											<p className="project__info--bold">Review:</p>
											<q className="project__review">
												{project.projectReview
													? project.projectReview
													: 'No review'}
											</q>
										</div>
									</div>
								</div>
								<p className="project__content">{project.content}</p>
							</div>
						</div>
					</div>
				</StyledProjectDetails>
			</>
		);
	} else {
		return (
			<>
				<NavbarOtherSites></NavbarOtherSites>
				<StyledProjectDetails className="sites__hero">
					<div className="sites__container">
						<div className="container">
							<h1 className="section__title">Loading project...</h1>
						</div>
					</div>
				</StyledProjectDetails>
			</>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	const project = projects ? projects[id] : null;
	return {
		project: project,
		auth: state.firebase.auth,
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{
			collection: 'projects',
		},
	])
)(ProjectDetails);

import React from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ProjectList from '../components/projects/ProjectList';

const StyledProjects = styled.section`
	display: flex;
	flex-direction: column;

	.project {
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
			padding: 15px;
			transition: 0.2s ease-in-out;
			min-height: 231px;

			&:hover {
				transition: 0.2s ease-in-out;
				box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
			}
		}

		&__name {
			font-size: 24px;
			font-weight: 600;
			margin-top: 1rem;
			text-align: justify;
		}

		&__category {
			text-align: justify;
			overflow: hidden;
			font-size: 14px;
			color: #7f7f7f;
			font-weight: 500;
		}
	}

	.projects__desc {
		margin-bottom: 50px;
		width: 100%;
	}
`;

const Projects = props => {
	const { projects } = props;
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledProjects className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title rubber-band">Projects</h1>
						<div className="sites__wrapper projects__wrapper">
							<div className="sites__desc projects__desc">
								Check our portfolio!
							</div>
							<ProjectList projects={projects}></ProjectList>
						</div>
					</div>
				</div>
			</StyledProjects>
		</>
	);
};

const mapStateToProps = state => {
	return {
		projects: state.firestore.ordered.projects
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: 'projects', orderBy: ['createdAt', 'desc'] }])
)(Projects);

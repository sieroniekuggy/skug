import React from 'react';
import styled from 'styled-components';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const StyledProjectList = styled.div`
	.project__item {
		transition: 0.2s ease-in-out;
		box-shadow: 0 2px 10px rgba(50, 50, 93, 0.1);

		.project__name {
			transition: 0.2s ease-in-out;
		}

		&:hover {
			transition: 0.2s ease-in-out;

			.project__name {
				color: #49a9e0;
				transition: 0.2s ease-in-out;
			}
		}
	}
`;

export default function ProjectList({ projects }) {
	return (
		<StyledProjectList className="project__wrapper">
			{projects &&
				projects.map(project => {
					return (
						<Link
							to={'/project/' + project.id}
							className="project__item"
							title={project.projectName}
							key={project.id}
						>
							<ProjectSummary project={project} />
						</Link>
					);
				})}
		</StyledProjectList>
	);
}

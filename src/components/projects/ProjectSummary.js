import React from 'react';
import styled from 'styled-components';

const StyledProjectSummary = styled.div`
	.project__background--preview {
		width: 100%;
	}
`;

export default function PostSummary({ project }) {
	return (
		<StyledProjectSummary>
			<div className="project__box">
				<img
					loading="lazy"
					src={project.projectBackground}
					className="project__background--preview"
					alt="project background"
				/>
				<p className="project__name">{project.projectName}</p>
				<p className="project__category">{project.projectCategory}</p>
			</div>
		</StyledProjectSummary>
	);
}

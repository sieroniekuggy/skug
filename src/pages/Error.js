import React from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';

const StyledError = styled.section``;

export default function Error() {
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledError className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title">Error 404</h1>
						<div className="sites__wrapper">Not found.</div>
					</div>
				</div>
			</StyledError>
		</>
	);
}

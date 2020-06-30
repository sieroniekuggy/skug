import React from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';

const StyledAdmin = styled.section`
	.admin__wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 10px;
	}

	.admin__box {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background: #fff;
		border-radius: 5px;
		padding: 15px;
		border: 2px solid #49a9e0;
		-webkit-transition: 0.2s ease-in-out;
		transition: 0.2s ease-in-out;

		&:hover {
			background: #49a9e0;
			color: white;
			transition: 0.2s ease-in-out;
		}
	}

	.admin__desc {
		margin-top: 50px;
	}
`;

function Admin(props) {
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledAdmin className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title rubber-band">Admin panel</h1>
						<div className="sites__desc admin__desc">
							Hello {props.profile.firstName}!
						</div>
						<div className="sites__wrapper admin__wrapper">
							<Link to="/create-post" className="admin__box">
								<div className="admin__title">Add a post</div>
							</Link>
							<Link to="/create-project" className="admin__box">
								<div className="admin__title">Add a project</div>
							</Link>
							<Link to="/" className="admin__box">
								<span onClick={props.signOut} className="btn btn-logout">
									Log Out
								</span>
							</Link>
						</div>
					</div>
				</div>
			</StyledAdmin>
		</>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		signOut: () => dispatch(signOut())
	};
};

export default connect(null, mapDispatchToProps)(Admin);

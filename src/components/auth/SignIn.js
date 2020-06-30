import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import firebase from '../../config/fbConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledSignIn = styled.section`
	width: 50%;
`;

class SignIn extends Component {
	state = {
		email: '',
		password: '',
		isSignedIn: false,
	};
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.signIn(this.state);
	};
	componentDidMount = () => {
		firebase.auth().onAuthStateChanged((user) => {
			this.setState({
				isSignedIn: !!user,
			});
		});

		const inputs = document.querySelectorAll('.input-field__input');

		function addCl() {
			let parent = this.parentNode.parentNode.parentNode;
			parent.classList.add('focus');
		}

		function remCl() {
			let parent = this.parentNode.parentNode.parentNode;
			if (this.value === '') {
				parent.classList.remove('focus');
			}
		}

		inputs.forEach((input) => {
			input.addEventListener('focus', addCl);
			input.addEventListener('blur', remCl);
		});
	};
	render() {
		const { authError } = this.props;
		return (
			<StyledSignIn className="form__wrapper">
				<form className="signin-form form--flex" onSubmit={this.handleSubmit}>
					<div className="input-field">
						<div className="input-field__icon">
							<FontAwesomeIcon icon="user" className="input-field__fa" />
						</div>
						<div className="input-field__wrapper">
							<span>Email</span>
							<label>
								<input
									type="email"
									id="email"
									onChange={this.handleChange}
									aria-label="email"
									className="input-field__input"
								/>
							</label>
						</div>
					</div>
					<div className="input-field">
						<div className="input-field__icon">
							<FontAwesomeIcon icon="unlock" className="input-field__fa" />
						</div>
						<div className="input-field__wrapper">
							<span>Password</span>
							<label>
								<input
									type="password"
									id="password"
									onChange={this.handleChange}
									aria-label="password"
									className="input-field__input"
								/>
							</label>
						</div>
					</div>
					<button className="form__btn btn--gradient">Login</button>
					<div>{authError ? <p>{authError}</p> : null}</div>
				</form>
			</StyledSignIn>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (creds) => dispatch(signIn(creds)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledPriceForm = styled.div`
	width: 50%;
	box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.15);
	padding: 25px;
	border-radius: 5px;

	.input-field {
		width: 49.25%;
	}

	.input-field:not(.input-field__textarea) {
		grid-template-columns: 10% 90%;
	}

	.input-field__textarea {
		width: 100%;
	}

	.input-field__checkbox {
		width: 100%;
		margin: 0.5rem 0;
		font-size: 14px;
		display: flex;
	}

	.section__subtitle {
		margin-bottom: 25px;
	}

	.section__subtitle:nth-of-type(2) {
		margin-top: 50px;
	}

	.input-checkbox {
		&__wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
		}
	}
`;

class PriceForm extends Component {
	state = {
		name: '',
		email: '',
		message: '',
		emailStatus: '',
		type: ['website'],
	};

	handleChange = (input) => (e) => {
		this.setState({ [input]: e.target.value });
	};

	handleCheckbox = async (e) => {
		if (e.target.checked) {
			await this.setState({
				type: [...this.state.type, e.target.value],
			});
		} else {
			await this.setState({
				type: this.state.type.filter(function (item) {
					return item !== e.target.value;
				}),
			});
		}
	};

	submitForm = (e) => {
		const { name, email, message, type } = this.state;
		const newType = type.join(' ');

		let xhr = new XMLHttpRequest();

		xhr.addEventListener('load', () => {
			this.setState({
				emailStatus: xhr.responseText,
			});
		});

		xhr.open(
			'GET',
			'https://pagetify-api.herokuapp.com/index.php?sendto=' +
				email +
				'&name=' +
				name +
				'&message=' +
				message +
				'&type=' +
				newType
		);

		xhr.send();

		this.setState({
			name: '',
			email: '',
			message: '',
			type: '',
		});
		e.preventDefault();
	};

	componentDidMount = () => {
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
		const { name, email, message, emailStatus } = this.state;
		return (
			<StyledPriceForm className="form__wrapper" onSubmit={this.submitForm}>
				{emailStatus ? emailStatus : null}
				<form className="form--flex">
					<p className="section__subtitle">What do you want us to do?</p>
					<div className="input-checkbox__wrapper">
						<div className="input-checkbox--left">
							<div className="input-field__checkbox">
								<input
									type="checkbox"
									name="website"
									id="website"
									value="website"
									defaultChecked={true}
									onChange={this.handleCheckbox}
								/>
								<label className="checkbox__label" htmlFor="website">
									Website
								</label>
							</div>
							<div className="input-field__checkbox">
								<input
									type="checkbox"
									name="store"
									id="store"
									value="online store"
									onChange={this.handleCheckbox}
								/>
								<label className="checkbox__label" htmlFor="store">
									Online store
								</label>
							</div>
							<div className="input-field__checkbox">
								<input
									type="checkbox"
									name="graphic"
									id="graphic"
									value="graphic"
									onChange={this.handleCheckbox}
								/>
								<label className="checkbox__label" htmlFor="graphic">
									Graphic design
								</label>
							</div>
						</div>
						<div className="input-checkbox--right">
							<div className="input-field__checkbox">
								<input
									type="checkbox"
									name="ad"
									id="ad"
									value="advertisement"
									onChange={this.handleCheckbox}
								/>
								<label className="checkbox__label" htmlFor="ad">
									Advertisements
								</label>
							</div>
							<div className="input-field__checkbox">
								<input
									type="checkbox"
									name="seo"
									id="seo"
									value="seo optimization"
									onChange={this.handleCheckbox}
								/>
								<label className="checkbox__label" htmlFor="seo">
									SEO Optimization
								</label>
							</div>
							<div className="input-field__checkbox">
								<input
									type="checkbox"
									name="other"
									id="other"
									value="other project"
									onChange={this.handleCheckbox}
								/>
								<label className="checkbox__label" htmlFor="other">
									Other project
								</label>
							</div>
						</div>
					</div>
					<p className="section__subtitle">Your contact info and message</p>
					<div className="input-field--flex">
						<div className="input-field">
							<div className="input-field__icon">
								<FontAwesomeIcon icon="user" className="input-field__fa" />
							</div>
							<div className="input-field__wrapper">
								<span>Name</span>
								<label>
									<input
										type="text"
										value={name}
										onChange={this.handleChange('name')}
										required
										className="input-field__input"
									/>
								</label>
							</div>
						</div>
						<div className="input-field">
							<div className="input-field__icon">
								<FontAwesomeIcon icon="envelope" className="input-field__fa" />
							</div>
							<div className="input-field__wrapper">
								<span>Email</span>
								<label>
									<input
										type="email"
										value={email}
										onChange={this.handleChange('email')}
										required
										className="input-field__input"
									/>
								</label>
							</div>
						</div>
					</div>
					<div className="input-field input-field__textarea">
						<div className="input-field__icon">
							<FontAwesomeIcon icon="comments" className="input-field__fa" />
						</div>
						<div className="input-field__wrapper">
							<span>Message</span>
							<label>
								<textarea
									type="text"
									value={message}
									onChange={this.handleChange('message')}
									required
									className="input-field__input"
								></textarea>
							</label>
						</div>
					</div>
					<input
						type="submit"
						className="form__btn btn--gradient"
						value="Submit"
					/>
				</form>
			</StyledPriceForm>
		);
	}
}

export default PriceForm;

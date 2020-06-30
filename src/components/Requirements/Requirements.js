import React from 'react';
import styled from 'styled-components';
import tickDownPurple from '../../images/decorations/tick-down-purple.svg';
import pyramidDown from '../../images/decorations/pyramiddown.svg';
import { Link } from 'react-router-dom';

const StyledRequirements = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;

	.requirements {
		background: linear-gradient(to right, #36d1dc, #5b86e5);
		color: #fff;

		&__txt {
			text-align: center;
			width: 50%;
			font-weight: 500;
			margin: 25px 0;
			font-size: 18px;
		}

		&__btn {
			background: #fff;
			border-radius: 25px;
			padding: 10px 30px;
			font-weight: 500;
			box-shadow: 0 2px 10px rgba(50, 50, 93, 0.1);
			transition: 0.2s ease-in-out;
			z-index: 1;

			&:hover {
				transition: 0.2s ease-in-out;
				box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
			}

			&--txt {
				background: -webkit-linear-gradient(left, #36d1dc, #5b86e5);
				-webkit-background-clip: text;
				background-clip: text;
				-webkit-text-fill-color: transparent;
				font-weight: 600;

				&::selection {
					-webkit-background-clip: initial;
					background-clip: initial;
					-webkit-text-fill-color: initial;
					color: white;
				}
			}

			&--tick::after {
				content: 'a';
				color: transparent;
				background: url(${tickDownPurple}) center no-repeat;
				margin-left: 0.5rem;
				background-size: contain;
				transform: rotate(-90deg);
				display: inline-block;
			}
		}
	}

	.decoration {
		margin-bottom: 50px;

		&__pyramiddown {
			bottom: 2px;
		}
	}
`;

export default function Requirements() {
	return (
		<StyledRequirements>
			<div className="requirements">
				<div className="container">
					<h1 className="section__title">Tell us your requirements</h1>
					<p className="requirements__txt">
						Complete a very simple quick quotation form. Thanks to this, we will
						get to know your requirements and select something fully adequate to
						your needs.
					</p>
					<Link to="/price" className="requirements__btn">
						<span className="requirements__btn--txt">Ask for price</span>
						<i className="requirements__btn--tick"></i>
					</Link>
				</div>
			</div>
			<img
				loading="lazy"
				className="decoration decoration__pyramiddown"
				src={pyramidDown}
				alt="decoration"
			/>
		</StyledRequirements>
	);
}

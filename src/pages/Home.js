import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

import bg from '../images/home/bg.jpg';
import delivery from '../images/home/delivery.svg';
import graphic from '../images/home/graphic.svg';
import standout1 from '../images/home/standout-1.svg';
import standout2 from '../images/home/standout-2.svg';
import standout3 from '../images/home/standout-3.svg';
import standout4 from '../images/home/standout-4.svg';
import stores from '../images/home/stores.svg';
import websites from '../images/home/websites.svg';
import quality from '../images/home/quality.svg';
import wallet from '../images/home/wallet.svg';

import tickdown from '../images/decorations/tick-down.svg';
import waveup from '../images/decorations/waveup.svg';
import wavedown from '../images/decorations/wavedown.svg';
import stairsup from '../images/decorations/stairsup.svg';
import tick from '../images/decorations/tick.svg';

import aniela from '../images/clients/aniela.jpg';
import charlean from '../images/clients/charlean.jpg';
import kalil from '../images/clients/kalil.jpg';
import jeralee from '../images/clients/jeralee.jpg';
import aaron from '../images/clients/aaron.jpg';
import marti from '../images/clients/marti.jpg';
import aubrie from '../images/clients/aubrie.jpg';
import dodi from '../images/clients/dodi.jpg';
import adam from '../images/clients/adam.jpg';

const StyledHome = styled.section`
	.hero,
	.offer,
	.reviews,
	.stand-out {
		display: flex;
		justify-content: center;
	}

	.offer,
	.reviews,
	.stand-out {
		.container {
			align-items: center;
		}
	}
`;

const StyledHomeHero = styled.header`
	background-image: url(${bg});
	background-size: cover;
	background-position: center bottom;
	background-repeat: no-repeat;
	background-attachment: fixed;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 75vh;

	.hero {
		height: fit-content;
		color: #fff;

		&__cta {
			display: flex;
			align-items: center;
		}

		.container {
			justify-content: space-between;
			align-items: flex-start;
			flex-direction: row;

			.wrapper {
				width: 42%;
			}

			h1 {
				font-size: 48px;
				font-weight: 700;
			}

			p {
				font-weight: 500;
				margin: 1rem 0;
				font-size: 18px;
			}

			.hero__price {
				font-weight: 600;
				font-family: 'Montserrat';
				border: none;
				border-radius: 25px;
				background-image: linear-gradient(to right, #36d1dc, #5b86e5, #36d1dc);
				color: #fff;
				padding: 10px 30px;
				cursor: pointer;
				font-size: inherit;
				box-shadow: 0 2px 10px rgba(50, 50, 93, 0.1);
				transition: 0.4s ease-in-out;
				background-size: 200%;

				&:hover {
					transition: 0.4s ease-in-out;
					box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
					background-position: right;
				}

				&::after {
					content: 'a';
					color: transparent;
					background: url(${tickdown}) center no-repeat;
					margin-left: 0.5rem;
					background-size: contain;
					transform: rotate(-90deg);
					display: inline-block;
				}
			}

			.hero__check {
				font-weight: 600;
				margin-left: 1rem;

				&::after {
					content: 'a';
					color: transparent;
					background: url(${tickdown}) center no-repeat;
					margin-left: 0.5rem;
					background-size: contain;
					position: absolute;
					animation: 1s float infinite linear;
				}
			}
		}
	}

	.decoration {
		bottom: -3px;
	}
`;

const StyledHomeOffer = styled.section`
	position: relative;

	.offer {
		padding: 50px 0;

		h1 {
			margin-bottom: 50px;
		}

		&__wrapper {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 30px;
		}

		&__box {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			padding: 15px;
			transition: 0.2s ease-in-out;

			img {
				width: 75px;
				height: 75px;
			}

			&:hover {
				box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
				transition: 0.2s ease-in-out;
			}
		}

		&__title {
			font-size: 24px;
			font-weight: 600;
			margin: 1rem 0;
		}

		&__desc {
			text-align: justify;
		}
	}
`;

const StyledHomeReviews = styled.section`
	position: relative;
	background: #fbfbfb;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	.reviews {
		h1 {
			width: 40%;
			text-align: right;
			align-self: flex-end;
			margin: 50px 0 100px;
		}

		&__wrapper {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 60px 30px;
			width: 100%;
		}

		&__box {
			background: #fff;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-direction: column;
			padding: 20px;
			border: 1px solid;
			border-radius: 5px;
			border-color: #d2d2d2;
			position: relative;
			transition: 0.5s ease;

			&:hover {
				transition: 0.5s ease;
				box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
				transform: scale(1.1);

				.reviews__name {
					color: #49a9e0;
					transition: 0.3s ease-in-out;
				}

				.reviews__client {
					border: 1px solid #49a9e0;
					transition: 0.5s ease;
				}
			}

			&--left,
			&--center,
			&--right {
				border-color: #d2d2d2;

				&:hover {
					border-color: #49a9e0;
					transition: 0.5s ease;
				}
			}
		}

		&__client {
			position: absolute;
			top: -30px;
			overflow: hidden;
			border-radius: 100%;
			height: 60px;
			width: 60px;
			border: 1px solid #d2d2d2;
			transition: 0.5s ease;
		}

		&__name {
			margin: 1rem 0;
			margin-top: 1.5rem;
			font-weight: 600;
			transition: 0.3s ease-in-out;
		}

		&__desc {
			text-align: justify;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
				Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		}
	}

	.decoration--bottom {
		margin-top: 80px;
		bottom: -3px;
	}
`;

const StyledHomeStandOut = styled.section`
	position: relative;

	.stand-out {
		&__desc {
			margin: 50px 0;
			width: 50%;
			text-align: center;
			font-weight: 500;
			font-size: 18px;
		}

		&__wrapper {
			display: flex;
			flex-direction: column;
		}

		&--flex {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&__box {
			opacity: 0.9;
			border-radius: 5px;
			padding: 25px;
			border: 1px solid #d2d2d2;
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: calc(50% + (25% / 3) * 2);
			margin: 10px 0;
			transition: 0.2s ease-in-out;
			background: #fff;

			&:hover {
				opacity: 1;
				transition: 0.2s ease-in-out;
				box-shadow: 0 2px 10px rgba(50, 50, 93, 0.1);
			}

			img {
				width: 75px;
				height: 75px;
			}

			&--left {
				align-self: flex-start;
			}

			&--right {
				align-self: flex-end;
			}
		}

		&__txt {
			text-align: justify;
			width: 75%;
		}
	}
`;

export default function Home(props) {
	return (
		<StyledHome>
			<StyledHomeHero>
				<Navbar profile={props.profile}></Navbar>
				<div className="hero">
					<div className="container">
						<div className="wrapper">
							<h1
								data-aos="fade-right"
								data-aos-once="true"
								className="rubber-band"
							>
								Take your website to the next level
							</h1>
							<p
								data-aos="fade-right"
								data-aos-once="true"
								data-aos-delay="100"
							>
								If you need a website that if fully responsive, optimized and
								easy to use - we are here for you.
							</p>
							<div
								data-aos="fade-right"
								data-aos-once="true"
								data-aos-delay="200"
								className="hero__cta"
							>
								<Link to="/price" className="hero__price">
									Ask for price
								</Link>
								<a href="#offer" className="hero__check">
									or check our offer
								</a>
							</div>
						</div>
					</div>
				</div>
				<img
					loading="lazy"
					className="decoration"
					src={waveup}
					alt="decoration"
				/>
			</StyledHomeHero>
			<StyledHomeOffer>
				<div id="offer" className="offer">
					<div className="container">
						<h1 className="section__title">What can we offer for you?</h1>
						<div className="offer__wrapper">
							<Link to="/websites" className="offer__box">
								<img
									loading="lazy"
									src={websites}
									alt="websites"
									className="offer__icon"
									data-aos="fade-up"
									data-aos-once="true"
								/>
								<p className="offer__title">Websites</p>
								<p className="offer__desc">
									Responsible, SEO-friendly, modern-looking, very efficient and
									convenient in self-service websites.
								</p>
							</Link>
							<Link to="/stores" className="offer__box">
								<img
									loading="lazy"
									src={stores}
									alt="stores"
									className="offer__icon"
									data-aos="fade-up"
									data-aos-once="true"
									data-aos-delay="100"
								/>
								<p className="offer__title">Online stores</p>
								<p className="offer__desc">
									We use the world’s best e-commerce systems like WooCommerce or
									PrestaShop which are easy to use.
								</p>
							</Link>
							<Link to="/graphics" className="offer__box">
								<img
									loading="lazy"
									src={graphic}
									alt="graphic"
									className="offer__icon"
									data-aos="fade-up"
									data-aos-once="true"
									data-aos-delay="200"
								/>
								<p className="offer__title">Graphic design</p>
								<p className="offer__desc">
									If you don't have graphic skills or a knack for writing,
									entrust us with creating effective content for your website.{' '}
								</p>
							</Link>
							<div className="offer__box">
								<img
									loading="lazy"
									src={delivery}
									alt="delivery"
									className="offer__icon"
									data-aos="fade-up"
									data-aos-once="true"
									data-aos-delay="300"
								/>
								<p className="offer__title">Fast delivery</p>
								<p className="offer__desc">
									We don’t like waiting as much as you do, so we make sure to
									guarantee as fastest delivery as possible.{' '}
								</p>
							</div>
							<div className="offer__box">
								<img
									loading="lazy"
									src={quality}
									alt="quality"
									className="offer__icon"
									data-aos="fade-up"
									data-aos-once="true"
									data-aos-delay="400"
								/>
								<p className="offer__title">Highest quality</p>
								<p className="offer__desc">
									We are professionals that care about what are we developing.
									We always do our best.
								</p>
							</div>
							<div className="offer__box">
								<img
									loading="lazy"
									src={wallet}
									alt="wallet"
									className="offer__icon"
									data-aos="fade-up"
									data-aos-once="true"
									data-aos-delay="500"
								/>
								<p className="offer__title">Wallet-friendly</p>
								<p className="offer__desc">
									We don’t want you to bankrupt after taking our service. Our
									prices are the most optimized ones.
								</p>
							</div>
						</div>
					</div>
				</div>
			</StyledHomeOffer>
			<StyledHomeReviews>
				<img
					loading="lazy"
					className="decoration decoration--top"
					src={wavedown}
					alt="decoration"
				/>
				<div className="reviews">
					<div className="container">
						<h1 className="section__title">
							What do our customers say about us?
						</h1>
						<div className="reviews__wrapper">
							<div className="reviews__box reviews__box--left">
								<div className="reviews__client">
									<img
										loading="lazy"
										src={aniela}
										alt="client"
										className="reviews__img"
									/>
								</div>
								<p className="reviews__name">Aniela</p>
								<p className="reviews__desc">
									The best on the net! I have gotten at least 50 times the value
									from Pagetify. I am completely blown away. Thanks to Pagetify,
									we've just launched our 5th website!
								</p>
							</div>
							<div className="reviews__box reviews__box--center">
								<div className="reviews__client">
									<img
										loading="lazy"
										src={charlean}
										alt="client"
										className="reviews__img"
									/>
								</div>
								<p className="reviews__name">Kamil</p>
								<p className="reviews__desc">
									I wanted simple WooCommerce online store which would help me
									getting more sales. I chose Pagetify offer, and I'm not
									disappointed. Pagetify was the best investment I ever made.
									Thank you!
								</p>
							</div>
							<div className="reviews__box reviews__box--right">
								<div className="reviews__client">
									<img
										loading="lazy"
										src={kalil}
										alt="client"
										className="reviews__img"
									/>
								</div>
								<p className="reviews__name">Kalil</p>
								<p className="reviews__desc">
									Pagetify is worth much more than I paid. Pagetify is the most
									valuable business resource we have EVER purchased. Pagetify is
									worth much more than I paid.
								</p>
							</div>
							<div className="reviews__box reviews__box--left">
								<div className="reviews__client">
									<img
										loading="lazy"
										src={jeralee}
										alt="client"
										className="reviews__img"
									/>
								</div>
								<p className="reviews__name">Jeralee</p>
								<p className="reviews__desc">
									The best on the net! I have gotten at least 50 times the value
									from Pagetify. I am completely blown away.
								</p>
							</div>
							<div className="reviews__box reviews__box--center">
								<div className="reviews__client">
									<img
										loading="lazy"
										src={aaron}
										alt="client"
										className="reviews__img"
									/>
								</div>
								<p className="reviews__name">Aaron</p>
								<p className="reviews__desc">
									Pagetify is the real deal! Great job, I will definitely be
									ordering again! Thank you for making it painless, pleasant and
									most of all hassle free! Pagetify is worth much more than I
									paid. I highly recommend them.
								</p>
							</div>
							<div className="reviews__box reviews__box--right">
								<div className="reviews__client">
									<img
										loading="lazy"
										src={marti}
										alt="client"
										className="reviews__img"
									/>
								</div>
								<p className="reviews__name">Marti</p>
								<p className="reviews__desc">
									Pagetify is the real deal! Great job, I will definitely be
									ordering again! Thank you for making it painless, pleasant and
									most of all hassle free! I will be recommending you guys.
								</p>
							</div>
							<div className="reviews__box reviews__box--left">
								<div className="reviews__client">
									<img
										loading="lazy"
										src={aubrie}
										alt="client"
										className="reviews__img"
									/>
								</div>
								<p className="reviews__name">Aubrie</p>
								<p className="reviews__desc">
									You guys rock! No matter where you go, Pagetify is the best! I
									am completely blown away. I will be recommending you guys.
								</p>
							</div>
							<div className="reviews__box reviews__box--center">
								<div className="reviews__client">
									<img
										loading="lazy"
										src={dodi}
										alt="client"
										className="reviews__img"
									/>
								</div>
								<p className="reviews__name">Dodi</p>
								<p className="reviews__desc">
									The best on the net! I have gotten at least 50 times the value
									from Pagetify. I am completely blown away. I will be
									recommending you guys. Pagetify was the best investment I ever
									made. Thank you!
								</p>
							</div>
							<div className="reviews__box reviews__box--right">
								<div className="reviews__client">
									<img
										loading="lazy"
										src={adam}
										alt="client"
										className="reviews__img"
									/>
								</div>
								<p className="reviews__name">Adam</p>
								<p className="reviews__desc">
									Pagetify was the best investment I ever made. Thank you!
								</p>
							</div>
						</div>
					</div>
				</div>
				<img
					loading="lazy"
					className="decoration decoration--bottom"
					src={stairsup}
					alt="decoration"
				/>
			</StyledHomeReviews>
			<StyledHomeStandOut>
				<div className="stand-out">
					<div className="container">
						<h1 className="section__title">How do we stand out?</h1>
						<p className="stand-out__desc">
							We know that there are a lot of companies operating in our
							industry on the market. However, several issues distinguish us
							from others and make you entrust us with the image of your company
							on the web.
						</p>
						<div className="stand-out__wrapper">
							<img
								data-aos="zoom-in"
								data-aos-once="true"
								data-aos-delay="400"
								loading="lazy"
								className="decoration decoration--tick"
								src={tick}
								alt="decoration"
							/>
							<div className="stand-out__box stand-out__box--right">
								<div
									className="stand-out--flex"
									data-aos="fade-up"
									data-aos-once="true"
								>
									<img loading="lazy" src={standout1} alt="standout" />
									<p className="stand-out__txt">
										We approach each order individually. We guarantee that we
										will respond to your message within a maximum of 24 hours.
									</p>
								</div>
							</div>
							<div className="stand-out__box stand-out__box--left">
								<div
									className="stand-out--flex"
									data-aos="fade-up"
									data-aos-once="true"
									data-aos-delay="100"
								>
									<img loading="lazy" src={standout2} alt="standout" />
									<p className="stand-out__txt">
										We thoroughly analyze your requirements and propose
										solutions ourselves, thanks to which each project is tailor
										made.
									</p>
								</div>
							</div>
							<div className="stand-out__box stand-out__box--right">
								<div
									className="stand-out--flex"
									data-aos="fade-up"
									data-aos-once="true"
									data-aos-delay="200"
								>
									<img loading="lazy" src={standout3} alt="standout" />
									<p className="stand-out__txt">
										We do not leave anyone alone after commissioning the
										project. All you need to do is contact us and we'll advise
										you or help you in every situation.
									</p>
								</div>
							</div>
							<div className="stand-out__box stand-out__box--left">
								<div
									className="stand-out--flex"
									data-aos="fade-up"
									data-aos-once="true"
									data-aos-delay="300"
								>
									<img loading="lazy" src={standout4} alt="standout" />
									<p className="stand-out__txt">
										We do not leave anyone alone after commissioning the
										project. All you need to do is contact us and we'll advise
										you or help you in every situation.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</StyledHomeStandOut>
		</StyledHome>
	);
}

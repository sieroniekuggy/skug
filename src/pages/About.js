import React from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import bz from '../images/about/bz.png';
import dg from '../images/about/dg.png';
import video from '../images/about/video.mp4';
import video2 from '../images/about/video2.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledAbout = styled.section`
	.sites__desc {
		margin-bottom: 50px;
	}

	.section__subtitle {
		margin: 50px 0;
	}

	.video {
		&__wrapper {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 30px;
			transition: 0.2s ease-in-out;
			padding: 25px;
			box-shadow: 0 2px 10px rgba(50, 50, 93, 0.1);

			&:hover {
				transition: 0.2s ease-in-out;
				box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
			}

			video {
				width: 100%;
				border-radius: 5px;
			}
		}

		&__title {
			font-weight: 600;
			font-size: 24px;
			margin-bottom: 2rem;
		}

		&__desc {
			text-align: justify;
			margin: 1rem 0;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
				Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

			&--center {
				margin: 50px 0;
			}
		}
	}

	.about {
		&__dev {
			font-weight: 500;
			font-size: 24px;
			margin-top: 1rem;
			transition: 0.2s ease-in-out;
		}

		&__role {
			font-size: 16px;
			color: #7f7f7f;
			font-weight: 500;
		}

		&__wrapper {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 30px;
		}

		&__box {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			padding: 15px;
			transition: 0.2s ease-in-out;
			box-shadow: 0 2px 10px rgba(50, 50, 93, 0.1);
			outline: 2px solid transparent;

			&:hover {
				transition: 0.2s ease-in-out;
				box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
				outline: 2px solid #49a9e0;

				.about__dev {
					color: #49a9e0;
					transition: 0.2s ease-in-out;
				}

				.about__avatar {
					border: 2px solid #49a9e0;
					border-radius: 100%;
					transition: 0.2s ease-in-out;
				}
			}
		}

		&__social {
			margin: 1rem 0;
		}

		&__link {
			margin: 0 0.5rem;
			font-size: 18px;
		}

		&__link {
			&:hover {
				.about__icon {
					color: #49a9e0;
					transition: 0.2s ease-in-out;
				}
			}
		}

		&__icon {
			transition: 0.2s ease-in-out;
		}

		&__avatar {
			border: 2px solid transparent;
			border-radius: 100%;
			transition: 0.2s ease-in-out;
		}
	}
`;

export default function About() {
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledAbout className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title rubber-band">About</h1>
						<div className="sites__wrapper">
							<p className="sites__desc">Learn more about us!</p>
							<div className="video__wrapper">
								<video
									src={video}
									autoPlay={true}
									loop={true}
									muted={true}
									playsInline={true}
									data-aos="flip-up"
									data-aos-once="true"
								></video>
								<div className="video__text">
									<p className="video__title">About us</p>
									<p className="video__desc">
										At Pagetify, we create high-performance websites, apps and
										stunning graphics for businesses, bloggers and more.
									</p>
									<p className="video__desc">
										Web Development is our passion, and we’re passionate about
										helping people reach their goals. So when you choose us as
										your company, you won’t be disappointed.
									</p>
								</div>
							</div>
							<p className="video__desc--center">
								At Pagetify, we create high-performance websites, apps and
								stunning graphics for businesses, bloggers and more.
							</p>
							<div className="video__wrapper">
								<div className="video__text">
									<p className="video__title">Who are we?</p>
									<p className="video__desc">
										We are a small and suitable team of professional developers
										that focus on delivering high-quality final product.
									</p>
									<p className="video__desc">
										This is what makes us different from the big companies -
										contact with us is fast and efficient. We also provide
										support after any project. Just contact us and we will try
										to help in every situation.
									</p>
									<p className="video__desc">
										Our small team is made up of hard-working, motivated and
										continuously learning developers that know how to deliver
										the perfect final product.
									</p>
								</div>
								<video
									src={video2}
									autoPlay={true}
									loop={true}
									muted={true}
									playsInline={true}
									data-aos="flip-up"
									data-aos-once="true"
								></video>
							</div>
							<h1 className="section__title" style={{ margin: '50px 0' }}>
								Meet our team
							</h1>
							<div className="about__wrapper">
								<div className="about__box">
									<img
										loading="lazy"
										src={bz}
										alt="bart zalewski"
										className="about__avatar"
									/>
									<p className="about__dev">Bart Zalewski</p>
									<p className="about__role">Front-end Developer</p>
									<div className="about__social">
										<a
											href="https://bartzalewski.com/"
											target="_blank"
											rel="noopener noreferrer"
											className="about__link"
											title="Website"
										>
											<FontAwesomeIcon icon="globe" className="about__icon" />
										</a>
										<a
											href="https://www.linkedin.com/in/bartzalewski/"
											target="_blank"
											rel="noopener noreferrer"
											className="about__link"
											title="LinkedIn"
										>
											<FontAwesomeIcon
												icon={['fab', 'linkedin']}
												className="about__icon"
											/>
										</a>
										<a
											href="https://twitter.com/bartzalewski_"
											target="_blank"
											rel="noopener noreferrer"
											className="about__link"
											title="Twitter"
										>
											<FontAwesomeIcon
												icon={['fab', 'twitter']}
												className="about__icon"
											/>
										</a>
										<a
											href="https://github.com/bartzalewski"
											target="_blank"
											rel="noopener noreferrer"
											className="about__link"
											title="GitHub"
										>
											<FontAwesomeIcon
												icon={['fab', 'github']}
												className="about__icon"
											/>
										</a>
									</div>
								</div>
								<div className="about__box">
									<img
										loading="lazy"
										src={dg}
										alt="david grzanka"
										className="about__avatar"
									/>
									<p className="about__dev">David Grzanka</p>
									<p className="about__role">Back-end Developer</p>
									<div className="about__social">
										<a
											href="https://revore.pl/"
											target="_blank"
											rel="noopener noreferrer"
											className="about__link"
											title="Website"
										>
											<FontAwesomeIcon icon="globe" className="about__icon" />
										</a>
										<a
											href="https://www.linkedin.com/in/dawid-grzanka-a84a98180/"
											target="_blank"
											rel="noopener noreferrer"
											className="about__link"
											title="LinkedIn"
										>
											<FontAwesomeIcon
												icon={['fab', 'linkedin']}
												className="about__icon"
											/>
										</a>
										<a
											href="https://twitter.com/Daw_Grzanka"
											target="_blank"
											rel="noopener noreferrer"
											className="about__link"
											title="Twitter"
										>
											<FontAwesomeIcon
												icon={['fab', 'twitter']}
												className="about__icon"
											/>
										</a>
										<a
											href="https://github.com/revoree"
											target="_blank"
											rel="noopener noreferrer"
											className="about__link"
											title="GitHub"
										>
											<FontAwesomeIcon
												icon={['fab', 'github']}
												className="about__icon"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</StyledAbout>
		</>
	);
}

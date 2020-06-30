import React from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import palette from '../images/graphics/palette.svg';
import bucket from '../images/graphics/bucket.svg';
import other3 from '../images/graphics/other-3.svg';
import measured from '../images/graphics/measured.svg';
import colors from '../images/graphics/colors.svg';
import based from '../images/graphics/based.svg';
import customized from '../images/graphics/customized.svg';
import typography from '../images/graphics/typography.svg';
import fixes from '../images/graphics/fixes.svg';

const StyledGraphics = styled.section`
	.websites {
		&__wrapper {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 30px;
			margin: 50px 0;
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
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
				Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		}
	}
`;

export default function Graphics() {
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledGraphics className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title rubber-band">Graphic design</h1>
						<div className="sites__wrapper">
							<p className="sites__desc">
								Logo, business card, banner or graphic website template design -
								these are examples of projects you can order from us.
							</p>
							<div className="websites__wrapper">
								<div className="websites__box">
									<img
										data-aos="zoom-in"
										data-aos-once="true"
										src={palette}
										alt="palette icon"
									/>
									<p className="websites__title">Logos, business cards</p>
									<p className="websites__desc">
										<b>The best for new sellers</b>. If you don't need to sell
										tens of thousands of products, you have a limited budget and
										you don't want your website to be visited by millions of
										people at the same time, WordPress WooCommerce is the
										perfect option for you.
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="zoom-in"
										data-aos-once="true"
										data-aos-delay="100"
										src={bucket}
										alt="bucket icon"
									/>
									<p className="websites__title">Banner Ads</p>
									<p className="websites__desc">
										<b>The best for experienced sellers</b>. If you are looking
										for scalable solutions, you have an extra budget for
										programming work, you are ready to invest in your store and
										you care about the fastest page loading, PrestaShop is the
										perfect option for you.
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="zoom-in"
										data-aos-once="true"
										data-aos-delay="200"
										src={other3}
										alt="other icon"
									/>
									<p className="websites__title">Other graphics</p>
									<p className="websites__desc">
										If you want your store to be in other technology that is not
										listed here, you can always tell us what specific type of
										technology you want us to use. Knowing your requirements, we
										will shortly inform you if we are ready to work with you or
										not.
									</p>
								</div>
							</div>
							<h1 className="section__title">Our graphic features</h1>
							<div className="websites__wrapper">
								<div className="websites__box">
									<img
										data-aos="fade-up"
										data-aos-once="true"
										src={measured}
										alt="measured icon"
									/>
									<p className="websites__title">Accurately measured</p>
									<p className="websites__desc">
										We make sure that our websites are fully responsive on every
										device. Hence, your website will be looking superb on every
										screen!
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="fade-up"
										data-aos-once="true"
										data-aos-delay="100"
										src={colors}
										alt="colors icon"
									/>
									<p className="websites__title">Properly selected colors</p>
									<p className="websites__desc">
										We take care of every aspect that leads to making your
										website as fast as possible. Thanks to our experience, this
										is our strongest point amongst other companies.
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="fade-up"
										data-aos-once="true"
										data-aos-delay="200"
										src={based}
										alt="based icon"
									/>
									<p className="websites__title">Based on your idea</p>
									<p className="websites__desc">
										Don't spend a lot of money on website! With our service you
										can focus on getting more clients than saving up money from
										the beggining of your wonderful journey.
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="fade-up"
										data-aos-once="true"
										data-aos-delay="300"
										src={customized}
										alt="customized icon"
									/>
									<p className="websites__title">Tailored to your needs</p>
									<p className="websites__desc">
										Selling your product in your online store is the best way to
										make more sales. With our help, you can always do your best
										to reach your goals.
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="fade-up"
										data-aos-once="true"
										data-aos-delay="400"
										src={typography}
										alt="typography icon"
									/>
									<p className="websites__title">Aesthetic typography</p>
									<p className="websites__desc">
										If something is unclear to you, if you have any questions,
										you can always feel free to ask us. We want you to succeed,
										you finally chose us as your web developers.
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="fade-up"
										data-aos-once="true"
										data-aos-delay="500"
										src={fixes}
										alt="fixes icon"
									/>
									<p className="websites__title">Possible corrections</p>
									<p className="websites__desc">
										Thanks to our services offered you can easily do everything
										that you need to do when you are managing a store.
										Newsletters, quick product edition and much more!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</StyledGraphics>
		</>
	);
}

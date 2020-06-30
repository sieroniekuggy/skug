import React from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import wordpress from '../images/websites/wordpress.svg';
import react from '../images/websites/react.svg';
import other from '../images/websites/other.svg';
import responsive from '../images/websites/responsive.svg';
import blazing from '../images/websites/blazing.svg';
import seo from '../images/websites/seo.svg';
import easy from '../images/websites/easy.svg';
import convenient from '../images/websites/convenient.svg';
import modern from '../images/websites/modern.svg';

const StyledWebsites = styled.section`
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

	.count {
		&__wrapper {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 30px;
			width: 100%;
		}

		&__box {
			text-align: center;
		}

		&__counter {
			font-size: 36px;
			font-weight: 700;
		}
	}
`;

export default function Websites() {
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledWebsites className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title rubber-band">Websites</h1>
						<div className="sites__wrapper">
							<p className="sites__desc">
								Adapted to mobile devices, easy to operate independently,
								friendly SEO and ready for any expansion at any time.
							</p>
							<div className="websites__wrapper">
								<div className="websites__box">
									<img
										data-aos="zoom-in"
										data-aos-once="true"
										src={wordpress}
										alt="wordpress icon"
									/>
									<p className="websites__title">WordPress</p>
									<p className="websites__desc">
										<b>The most popular option</b>. If you are not that much
										into websites, this is the perfect option for you. Wordpress
										is the easiest way to get started in managing your own
										website, because of it's very clear interface which is
										effortless to learn and maintain.
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="zoom-in"
										data-aos-once="true"
										data-aos-delay="100"
										src={react}
										alt="react icon"
									/>
									<p className="websites__title">React</p>
									<p className="websites__desc">
										<b>The best non-wordpress option</b>. If you want your
										website to be the fastest one, the most stable and the most
										customizable among your competitors, this is the right
										choice for you. We provide React simple and complex apps
										which can match your strong requirements.
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="zoom-in"
										data-aos-once="true"
										data-aos-delay="200"
										src={other}
										alt="other icon"
									/>
									<p className="websites__title">Other technology</p>
									<p className="websites__desc">
										If you want your website to be in other technology that is
										not listed here, you can always tell us what specific type
										of technology you want us to use. Knowing your requirements,
										we will shortly inform you if we are ready to work with you
										or not.
									</p>
								</div>
							</div>
							<h1 className="section__title">Our website features</h1>
							<div className="websites__wrapper">
								<div className="websites__box">
									<img
										data-aos="fade-up"
										data-aos-once="true"
										src={responsive}
										alt="responsive icon"
									/>
									<p className="websites__title">Fully responsive</p>
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
										src={blazing}
										alt="blazing fast icon"
									/>
									<p className="websites__title">Blazing fast</p>
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
										src={seo}
										alt="seo icon"
									/>
									<p className="websites__title">SEO friendly</p>
									<p className="websites__desc">
										We had businesses like you do and we know how to position
										your website in the search engines and make it as efficient
										as possible to get to the top of popularity.
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="fade-up"
										data-aos-once="true"
										data-aos-delay="300"
										src={convenient}
										alt="technology icon"
									/>
									<p className="websites__title">Convenient</p>
									<p className="websites__desc">
										Depending on your needs, we do everything we can to make
										sure your final product is as advantageous for you and for
										your clients as possible.
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="fade-up"
										data-aos-once="true"
										data-aos-delay="400"
										src={modern}
										alt="modern looking icon"
									/>
									<p className="websites__title">Modern looking</p>
									<p className="websites__desc">
										The number one rule to success with your website is that it
										has to be looking beautiful. Your clients and visitors won't
										be satisfied with your website if it's not looking good.
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="fade-up"
										data-aos-once="true"
										data-aos-delay="500"
										src={easy}
										alt="easy to use icon"
									/>
									<p className="websites__title">Easy to use</p>
									<p className="websites__desc">
										After taking our service, we want you to feel comfortable
										maintaining your website. We always provide a manual
										instruction covering everything you need to know.
									</p>
								</div>
							</div>
							<div className="count__wrapper">
								<div className="count__box">
									<CountUp
										start={0}
										end={100}
										duration={2}
										redraw={true}
										suffix={'%'}
									>
										{({ countUpRef, start }) => (
											<VisibilitySensor onChange={start} delayedCall>
												<span ref={countUpRef} className="count__counter" />
											</VisibilitySensor>
										)}
									</CountUp>
									<p>Customer Satisfaction</p>
								</div>
								<div className="count__box">
									<CountUp
										start={0}
										end={1000000}
										duration={3}
										redraw={true}
										prefix={'+'}
									>
										{({ countUpRef, start }) => (
											<VisibilitySensor onChange={start} delayedCall>
												<span ref={countUpRef} className="count__counter" />
											</VisibilitySensor>
										)}
									</CountUp>
									<p>Written lines of code</p>
								</div>
								<div className="count__box">
									<CountUp
										start={0}
										end={20}
										duration={4}
										redraw={true}
										prefix={'&plusmn;'}
									>
										{({ countUpRef, start }) => (
											<VisibilitySensor onChange={start} delayedCall>
												<span ref={countUpRef} className="count__counter" />
											</VisibilitySensor>
										)}
									</CountUp>
									<p>Coffee drunk per day</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</StyledWebsites>
		</>
	);
}

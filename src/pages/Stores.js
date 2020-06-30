import React from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import woocommerce from '../images/stores/woocommerce.svg';
import prestashop from '../images/stores/prestashop.svg';
import other2 from '../images/stores/other-2.svg';
import branding from '../images/stores/branding-online.svg';
import help from '../images/stores/help.svg';
import sales from '../images/stores/sales.svg';
import save from '../images/stores/save-money.svg';
import success from '../images/stores/success.svg';
import yourStore from '../images/stores/your-store.svg';

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
`;

export default function Stores() {
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledWebsites className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title rubber-band">Online stores</h1>
						<div className="sites__wrapper">
							<p className="sites__desc">
								Easy to manage independently, friendly to buyers through mobile
								devices and ready for expansion with any new functions.
							</p>
							<div className="websites__wrapper">
								<div className="websites__box">
									<img
										data-aos="zoom-in"
										data-aos-once="true"
										src={woocommerce}
										alt="woocommerce icon"
									/>
									<p className="websites__title">WooCommerce</p>
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
										src={prestashop}
										alt="prestashop icon"
									/>
									<p className="websites__title">PrestaShop</p>
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
										src={other2}
										alt="other icon"
									/>
									<p className="websites__title">Other technology</p>
									<p className="websites__desc">
										If you want your store to be in other technology that is not
										listed here, you can always tell us what specific type of
										technology you want us to use. Knowing your requirements, we
										will shortly inform you if we are ready to work with you or
										not.
									</p>
								</div>
							</div>
							<h1 className="section__title">Our store features</h1>
							<div className="websites__wrapper">
								<div className="websites__box">
									<img
										data-aos="fade-up"
										data-aos-once="true"
										src={yourStore}
										alt="your store icon"
									/>
									<p className="websites__title">Your store online</p>
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
										src={success}
										alt="success icon"
									/>
									<p className="websites__title">Build successful brand</p>
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
										src={save}
										alt="save money icon"
									/>
									<p className="websites__title">Save your money</p>
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
										src={sales}
										alt="sales icon"
									/>
									<p className="websites__title">Make more sales</p>
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
										src={help}
										alt="help icon"
									/>
									<p className="websites__title">Get our help</p>
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
										src={branding}
										alt="easy to use icon"
									/>
									<p className="websites__title">Feature-rich</p>
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
			</StyledWebsites>
		</>
	);
}

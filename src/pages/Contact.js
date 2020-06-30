import React from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import ContactForm from '../components/Form/ContactForm';

const StyledContact = styled.section`
	.contact__desc {
		margin-bottom: 50px;
	}
`;

export default function Contact() {
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledContact className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title rubber-band">Contact</h1>
						<div className="sites__wrapper form__container">
							<p className="sites__desc contact__desc">
								Get in touch with us by using the following form or via{' '}
								<a
									href="https://m.me/sieroniekuggyofficial"
									target="_blank"
									rel="noopener noreferrer"
									className="default-link"
								>
									Messenger
								</a>
								!
							</p>
							<ContactForm></ContactForm>
						</div>
					</div>
				</div>
			</StyledContact>
		</>
	);
}

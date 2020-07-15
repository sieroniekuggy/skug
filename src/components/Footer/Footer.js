import React from 'react';
import styled from 'styled-components';
import logo from '../../images/decorations/logo-black.png';
import {
    Link
} from 'react-router-dom';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

const StyledFooter = styled.footer `
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 80px;

	.footer {
		width: 100%;

		&__wrapper {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-gap: 30px;
			width: 100%;
		}

		&__box {
			p {
				margin: 5px 0;
			}

			img {
				width: 75%;
			}
		}

		&__title {
			font-weight: 600;
			font-size: 18px;
			margin-bottom: 1rem;
		}

		&__content {
			display: flex;
			flex-direction: column;

			a:not(.footer__homepage) {
				margin: 2.5px 0;
				position: relative;
				width: fit-content;

				&::before {
					content: '';
					height: 1px;
					width: 100%;
					background: #293347;
					transform: scaleX(0);
					position: absolute;
					bottom: 0;
					transition: 0.2s ease-in-out;
				}

				&:hover::before {
					transition: 0.2s ease-in-out;
					transform: scaleX(1);
				}
			}

			img {
				margin-bottom: 1rem;
			}
		}

		&__line {
			width: 100%;
			margin-top: 50px;
		}

		&__copyright {
			padding: 50px 0;
			font-size: 14px;
			font-weight: 500;
		}

		&__link {
			font-size: 24px;

			&:nth-of-type(2) {
				margin: 0 1rem;
			}

			&:hover {
				.footer__icon {
					color: #49a9e0;
					transition: 0.2s ease-in-out;
				}
			}
		}

		&__icon {
			transition: 0.2s ease-in-out;
		}
	}
`;

export default function Footer() {
    return ( <
        StyledFooter className = "footer__container" >
        <
        div className = "footer" >
        <
        div className = "container" >
        <
        div className = "footer__wrapper" >
        <
        div className = "footer__box" >
        <
        div className = "footer__title" > Info < /div> <
        div className = "footer__content" >
        <
        Link to = "/"
        className = "footer__homepage" >
        <
        img loading = "lazy"
        src = {
            logo
        }
        alt = "pagetify logo" / >
        <
        /Link> <
        a href = "tel:+48531797647"
        title = "Call us now!" >
        <
        FontAwesomeIcon icon = "phone" / > +86 156 5324 2335 <
        /a> <
        a href = "mailto:mail@pagetify.com"
        title = "Email us now!" >
        <
        FontAwesomeIcon icon = "envelope" / > sieroniekuggy @gmail.com <
        /a> < /
        div > <
        /div> <
        div className = "footer__box" >
        <
        div className = "footer__title" > Services < /div> <
        div className = "footer__content" >
        <
        Link to = "/websites" > Websites < /Link> <
        Link to = "/stores" > Online stores < /Link> <
        Link to = "/graphics" > Graphic design < /Link> < /
        div > <
        /div> <
        div className = "footer__box" >
        <
        div className = "footer__title" > More < /div> <
        div className = "footer__content" >
        <
        Link to = "/projects" > Projects < /Link> <
        Link to = "/about" > About < /Link> <
        Link to = "/blog" > Blog < /Link> <
        Link to = "/contact" > Contact < /Link> <
        Link to = "/price" > Price < /Link> <
        Link to = "/privacy-policy" > Privacy Policy < /Link> < /
        div > <
        /div> <
        div className = "footer__box" >
        <
        div className = "footer__title" > Social media < /div> <
        a href = "https://www.facebook.com/sieroniekuggyofficial/"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "footer__link"
        title = "Facebook" >
        <
        FontAwesomeIcon icon = {
            ['fab', 'facebook']
        }
        className = "footer__icon" /
        >
        <
        /a> <
        a href = "https://twitter.com/sieroniekuggy"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "footer__link"
        title = "Twitter" >
        <
        FontAwesomeIcon icon = {
            ['fab', 'twitter']
        }
        className = "footer__icon" /
        >
        <
        /a> <
        a href = "https://www.instagram.com/sieroniekuggy"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "footer__link"
        title = "Instagram" >
        <
        FontAwesomeIcon icon = {
            ['fab', 'instagram']
        }
        className = "footer__icon" /
        >
        <
        /a> < /
        div > <
        /div> <
        hr className = "footer__line" / >

        <
        p className = "footer__copyright" >
        sKug & copy; 2018 - {
            new Date().getFullYear()
        }.All rights reserved. <
        /p> < /
        div > <
        /div> < /
        StyledFooter >
    );
}
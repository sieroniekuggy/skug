import { createGlobalStyle } from 'styled-components';
import tickDownPrimary from '../images/decorations/tick-down-primary.svg';
import tickDown from '../images/decorations/tick-down.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap');

  html {
	  scrollbar-color: #49A9E0 #f0f0f0;
	  scrollbar-width: thin;
  }

  body {
    font-family: 'Montserrat';
    color: #293347;
    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
    width: 0.75em;
  }

  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  body::-webkit-scrollbar-thumb {
    background: -webkit-linear-gradient(top, #36d1dc, #5b86e5);
    outline: 1px solid white;
    border-radius: 1em;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::selection {
    background: #49A9E0;
    color: white;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .active::before {
    transform: scaleX(1) !important;
  }

  .container {
    width: 1140px;
    display: flex;
    flex-direction: column;
  }

	.blog,
	.requirements,
	.footer {
		display: flex;
		justify-content: center;
	}

	.requirements,
	.footer {
		.container {
			align-items: center;
		}
	}

	.decoration {
		position: relative;
		bottom: 0px;
		width: 100%;
		z-index: 0;
		align-self: flex-end;
		user-select: none;
	}

	.decoration--top {
		top: 0px;
	}

	.decoration--bottom {
		bottom: 0px;
	}

	.decoration--tick {
		z-index: -1;
		height: 75%;
		position: absolute;
		align-self: center;
	}

	.section__title {
		font-size: 36px;
	}

  .section__subtitle {
    font-size: 24px;
    font-weight: 500;
  }

  .rubber-span {
    display: inline-block;
    cursor: default;
  }

  .rubber-band {
    user-select: none;
    white-space: pre-wrap;
  }

  .rubber-hide {
    visibility: hidden;
  }

  .rubberBand {
    animation-name: rubberBand;
    transition: all 0.3s ease-out;
    will-change: transform;
  }

  .rubberBand:hover {
    color: #49A9E0;
    transition: all .3s;
  }

  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  .btn--gradient {
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
  }

  .navbar {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 80px;
  }

  .navbar__services {
    position: relative;

    &:hover {
      .navbar__more {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
      }
    }
  }

  .navbar-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;

		.right {
			display: flex;
			font-weight: 500;
			align-items: center;
			justify-content: space-between;
			width: 50%;

			a {
				color: #fff;
				position: relative;
			}

			.navbar__link::before {
				content: '';
				height: 1px;
				width: 100%;
				background: #fff;
				transform: scaleX(0);
				position: absolute;
				bottom: 0;
				transition: 0.2s ease-in-out;
			}

			.navbar__link:hover::before {
				transition: 0.2s ease-in-out;
				transform: scaleX(1);
			}

			.navbar-price {
				border: none;

				li::after {
					content: 'a';
					color: transparent;
					background: url(${tickDown}) center no-repeat;
					margin-left: 0.5rem;
					background-size: contain;
					transform: rotate(-90deg);
					display: inline-block;
				}
			}
		}
	}

  .navbar__more {
    width: 355px;
    position: absolute;
    left: -147px;
    top: 20px;
    z-index: 9010;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;
    margin: 0 auto;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 175px 0;
    transform-origin: 175px 0;
    opacity: 0;
    padding: 20px 0 0;

    &--flex {
      width: 75%;
      margin: .5rem 0;

      span {
        font-size: 14px;
        font-weight: 400;
      }
    }

    &__content {
      background-color: #fff;
      color: #293347;
      border-radius: 5px;
      padding: 20px 30px;
      box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.15);
      position: relative;
      display: flex;
      flex-direction: column;

      a {
        transition: .2s ease-in-out;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        svg {
          width: 15% !important;
        }

        p {
          color: #293347;
        }

        span {
          color: #293347 !important;
        }

        &:hover {
          transition: .2s ease-in-out;
          transform: translateX(10px);

          p {
            color: #49A9E0;
          }

          span {
            color: #293347 !important;
          }

          svg {
            fill: #49A9E0;
          }
        }
      }

      &::after {
        content: '';
        position: absolute;
        border: 10px solid transparent;
        border-bottom-color: #fff;
        top: -20px;
        left: calc(50% - 10px);
      }
    }
  }

  /* SIDENAV */

  .hamburger {
    display: none;
    position: relative;
    cursor: pointer;
    z-index: 4;
  }

  .hamburger__wrapper {
    width: 25px;
    height: 20px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .hamburger--line {
    position: absolute;
    height: 2px;
    width: 100%;
    transition: all cubic-bezier(0.26, 0.1, 0.27, 1.55) 0.35s;
    background-image: linear-gradient(to right,#36d1dc,#5b86e5);
  }

  .top {
    top: 0%;
    width: 80%;
  }

  .middle {
    top: 45%;
  }

  .bottom {
    top: 90%;
    width: 60%;
  }

  .icon.close .top {
    transform: rotate(45deg);
    top: 48%;
    width: 100%;
  }

  .icon.close .middle,
  .icon.close .bottom {
    transform: rotate(-45deg);
    top: 48%;
    width: 100%;
  }

  .sidenav--open {
    width: 100% !important;
    transition: 0.5s;
  }

  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    top: 0;
	  right: 0;
    z-index: 4;
    background-color: white;
    transition: 0.2s ease-in-out;
    padding-top: 50px;
    overflow: hidden;

    a {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      display: block;
      transition: 0.2s ease-in-out;
      color: #293347;

      :hover {
        color: #49A9E0;
      }
    }

    .active {
      width: 100%;
      height: fit-content;
      font-weight: 500;
      color: #49a9e0;
    }

    &__more {
      transform: translateX(1rem);
      
      a {
        font-size: 14px;
      }
    }

    &__services {
      &::after {
        content: "a";
        color: transparent;
        margin-left: 0.5rem;
        background: url(${tickDownPrimary}) center center no-repeat;
        background-size: contain;
      }
    }
  }

  .sidenav__content {
    position: relative;
    width: fit-content !important;
  }

  /* SIDENAV END */

  /* OTHER SITES HERO */

  .sites {

    &__hero {
      margin: 50px 0;
    }

    &__container {
      display: flex;
      justify-content: center;
      align-items: center;

      .container {
        align-items: center;
      }
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 50px 0;
    }

    &__desc {
      width: 50%;
      text-align: center;
    }
  }

  /* OTHER SITES HERO END */

  /* FORM */

  .form {

    &--flex {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__container {
      width: 100%;
    }
    
    &__wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    &__btn {
      cursor: pointer;
      width: fit-content;
      margin-top: 1rem;
    }
  }

  /* FORM END */

  /* INPUTS */

  input, textarea {
		width: 100%;
		border: none;
		padding: 10px 15px;
		font-family: 'Montserrat';
		font-size: 16px;
		outline: none;
		transition: 0.2s ease-in-out;

		&:focus {
			border-color: #49a9e0;
			transition: 0.2s ease-in-out;
		}
	}

	textarea {
		height: 10rem;
	}

	#upload-post-btn {
		border: none;
		border-radius: 25px;
		background-image: linear-gradient(to right, #36d1dc, #5b86e5);
		color: #fff;
		padding: 10px 30px;
		font-weight: 600;
		box-shadow: 0 2px 10px rgba(50, 50, 93, 0.1);
		transition: 0.2s ease-in-out;
		font-size: 16px;
		font-family: 'Montserrat';
		cursor: pointer;
		margin-top: 5rem;
		visibility: hidden;

		&:hover {
			transition: 0.2s ease-in-out;
			box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
			transform: scale(1.05);
		}
	}

	.input-field {
		width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 5% 95%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;

		&--flex {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
    }
    
    &__wrapper {
      position: relative;
      height: 45px;

      span {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #999;
        font-size: 18px;
        transition: .3s;
        font-weight: 500;
      }
    }

    &__input {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      background: none;
      padding: 0.5rem 0.7rem;
      color: inherit;
      font-weight: 500;
    }

    &--m1 {
      margin: 1rem 0;
    }

    &--mt1 {
      margin-top: 1rem;
    }

    &__icon {
      color: #d9d9d9;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__fa {
      transition: .3s;
    }

    &::before, &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      width: 0%;
      height: 2px;
      background-color: #49A9E0;
      transition: .4s;
    }

    &::before {
      right: 50%;
    }

    &::after{
      left: 50%;
    }

    &.focus::before, &.focus::after {
      width: 50%;
    }

    &.focus span {
      top: -5px;
      font-size: 14px;
    }

    &.focus &__icon &__fa {
      color: #49A9E0;
      transition: .3s;
    }
	}

  /* INPUTS END */

  /* LINKS HOVER */

  .default-link {
		margin: 2.5px 0;
		position: relative;
		width: fit-content;
    transition: 0.2s ease-in-out;
    font-weight: 500;

		&::before {
			content: '';
			height: 1px;
			width: 100%;
			background: #293347;
			transform: scaleX(1);
			position: absolute;
			bottom: 0;
			transition: 0.2s ease-in-out;
		}

		&:hover::before {
			transition: 0.2s ease-in-out;
			transform: scaleX(0);
    }
    
    &:hover {
      color: #49A9E0;
      transition: 0.2s ease-in-out;
    }
	}

  /* LINKS HOVER END */

  /* CHECKBOX */

  input[type='checkbox'] {
		position: absolute;
		width: auto;
		padding: 8px;
		color: #363839;
		border: 1px solid #bdc1c6;
		border-radius: 100px;
		appearance: none;
		outline: 0;
		cursor: pointer;
		transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
		&::before {
			position: absolute;
			content: '';
			display: block;
			top: 2px;
			left: 5px;
			width: 5px;
			height: 9px;
			border-style: solid;
			border-color: #fff;
			border-width: 0 2px 2px 0;
			transform: rotate(45deg);
			opacity: 0;
		}
		&:checked {
			color: #fff;
			border-color: #49a9e0;
			background: #49a9e0;
			&::before {
				opacity: 1;
			}
		}
  }
  
  .checkbox__label {
    margin-left: 25px;
  }

  /* CHECKBOX END */

  @media (max-width: 1200px) {
    .container {
      width: 90%;
    }

    .hero {
      .wrapper {
        width: 50% !important;
      }
    }
  }

  @media (max-width: 1024px) {
    .container {
      width: 95%;
    }

    .hero {
      .wrapper {
        width: 58% !important;
      }
    }
  }
  
  @media (max-width: 900px) {

    .hamburger {
		  display: block;
	  }

    .section__title {
      text-align: center !important;
      font-size: 24px;
    }

    .section__subtitle, .video__title {
      font-size: 20px !important;
    }

    .navbar {
      height: 50px !important;

      &__left {

        img {
          width: 175px;
        }
      }

      &__right {
        display: none !important;
      }
    }

    .hero {

      h1 {
        font-size: 30px !important;
        width: 75%;
      }

      p {
        width: 75%;
        font-size: 16px !important;
      }

      .decoration {
        width: 101%;
      }

      .wrapper {
        width: 100% !important;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        &--right {
          display: none !important;
        }
      }

      &__cta {
        flex-direction: column;
      }

      &__price {
        margin-bottom: 1rem;
      }

      &__check {
        margin-left: 0 !important;
      }
    }

    .offer {
      &__wrapper {
        grid-template-columns: repeat(1,1fr) !important;
      }

      &__box {

        img {
          width: 60px !important;
          height: 60px !important;
        }
      }

      &__title {
        font-size: 18px !important;
      }

      &__desc {
        font-size: 14px !important;
      }
    }

    .stand-out {
      padding: 3rem 0px !important;

      &__desc {
        width: 75% !important;
        font-size: 16px !important;
      }

      &__box {
        width: 100% !important;

        img {
          width: 50px !important;
          height: 50px !important;
        }
      }

      &__txt {
        font-size: 14px !important;
        width: 70% !important;
      }
    }

    .reviews {
      h1 {
        width: 100% !important;
      }

      &__wrapper {
        grid-template-columns: repeat(1,1fr) !important;

        div {
          &:nth-of-type(4),
          &:nth-of-type(5),
          &:nth-of-type(6),
          &:nth-of-type(7),
          &:nth-of-type(8),
          &:nth-of-type(9) {
            display: none !important;
          }
        }
      }

      &__box {
        &:hover {
				  transform: scale(1.02) !important;
        }
      }

      &__client {
        height: 50px !important;
        width: 50px !important;
      }

      &__img {
        height: 50px !important;
        width: 50px !important;
      }

      &__name {
        font-size: 18px !important;
        margin: 1rem 0 2rem 0 !important;
      }

      &__desc {
        font-size: 14px !important;
      }
    }

    .blog {
      h1 {
        width: 100% !important;
      }

      &__wrapper {
        grid-template-columns: repeat(1,1fr) !important;
        grid-gap: 10px !important;

        a {
          &:nth-of-type(4),
          &:nth-of-type(5),
          &:nth-of-type(6) {
            display: none !important;
          }
        }
      }

      

      &__title {
        font-size: 20px !important;
      }

      &__desc {
        font-size: 14px !important;
      }
    }

    .requirements {
      padding: 3rem 0 !important;

      &__txt {
        width: 75% !important;
        font-size: 16px !important;
      }
    }

    .footer {

      a, p {
        font-size: 14px !important;
      }

      &__container {
        justify-content: flex-start !important;
      }

      &__wrapper {
        grid-template-columns: repeat(1,1fr) !important;
      }

      &__homepage {
        
        img {
          width: 175px !important;
        }
      }

      &__copyright {
        padding: 1rem 0 !important;
      }
    }

    .sites__desc {
      width: 100%;
      font-size: 14px !important;
    }

    .post {
      &__background {
        margin: 1rem 0 !important;
      }

      &__content {
        font-size: 16px !important;
      }
    }

    input, textarea {
      font-size: 14px !important;
    }

    .form__wrapper {
      width: 100% !important;
    }

    .input-field:not(.input-field__textarea) {
      grid-template-columns: 5% 95% !important;
    }

    .input-field {
      width: 100% !important;

      &--flex {
        flex-direction: column !important;
      }

      &--right {
        margin-top: 1rem;
      }

      &__wrapper {

        span {
          font-size: 14px !important;
        }
      }
    }

    .input-field.focus {
      span {
        font-size: 12px !important;
      }
    }

    .project__wrapper, .about__wrapper, .websites__wrapper, .project__wrapper--grid {
      grid-template-columns: repeat(1,1fr) !important;
    }

    .about {
      &__wrapper {
        width: 100%;
      }

      &__dev {
        font-size: 18px !important;
      }

      &__role {
        font-size: 14px !important;
      }
    }

    .video {

      &__wrapper {
        grid-template-columns: repeat(1, 1fr) !important;
      }

      &__desc {
        font-size: 14px !important;

        &--center {
          font-size: 14px !important;
          text-align: center;
        }
      }
    }

    .websites {
      &__title {
        font-size: 18px !important;

      }

      &__desc {
        font-size: 14px !important;
      }

      &__box {
        img {
          width: 60px !important;
          height: 60px !important;
        }
      }
    }

    .count {

      &__wrapper {
        grid-template-columns: repeat(1,1fr) !important;
      }

      &__box {
        font-size: 14px !important;
      }
      
      &__counter {
        font-size: 24px !important;
      }
    }

    .input-checkbox {

      &__wrapper {
        flex-direction: column;
      }

      &--left, &--right {
        width: 100%;
      }

      &--right {
        margin-top: -.5rem;
      }
    }
  }

  @media (max-width: 340px) {
    .hero {

      h1 {
        font-size: 26px !important;
        width: 80%;
      }
    }
  }

  @keyframes float {
    0% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(-5px);
    }
  }

  @keyframes rubberBand {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      -ms-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      -ms-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      -ms-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      -ms-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      -ms-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
`;

export default GlobalStyle;

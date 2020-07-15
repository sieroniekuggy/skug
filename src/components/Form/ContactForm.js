import React, {
    Component
} from 'react';
import styled from 'styled-components';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

const StyledContactForm = styled.div `
	width: 50%;

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
		margin: 1rem 0;
		font-size: 14px;
		display: flex;
	}
`;

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        emailStatus: '',
    };

    handleChange = (input) => (e) => {
        this.setState({
            [input]: e.target.value
        });
    };

    submitForm = (e) => {
        const {
            name,
            email,
            message
        } = this.state;

        let xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
            this.setState({
                emailStatus: xhr.responseText,
            });
        });

        xhr.open(
            'GET',
            'https://pagetdify-api.herokuapp.com/index.php?sendto=' +
            email +
            '&name=' +
            name +
            '&message=' +
            message
        );

        xhr.send();

        this.setState({
            name: '',
            email: '',
            message: '',
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
        const {
            name,
            email,
            message,
            emailStatus
        } = this.state;

        return ( <
            StyledContactForm className = "form__wrapper"
            onSubmit = {
                this.submitForm
            } > {
                emailStatus ? emailStatus : null
            } <
            form className = "form--flex" >
            <
            div className = "input-field--flex" >
            <
            div className = "input-field" >
            <
            div className = "input-field__icon" >
            <
            FontAwesomeIcon icon = "user"
            className = "input-field__fa" / >
            <
            /div> <
            div className = "input-field__wrapper" >
            <
            span > Your name * < /span> <
            label >
            <
            input type = "text"
            value = {
                name
            }
            onChange = {
                this.handleChange('name')
            }
            required className = "input-field__input" /
            >
            <
            /label> < /
            div > <
            /div> <
            div className = "input-field input-field--right" >
            <
            div className = "input-field__icon" >
            <
            FontAwesomeIcon icon = "envelope"
            className = "input-field__fa" / >
            <
            /div> <
            div className = "input-field__wrapper" >
            <
            span > Your email * < /span> <
            label >
            <
            input type = "email"
            value = {
                email
            }
            onChange = {
                this.handleChange('email')
            }
            required className = "input-field__input" /
            >
            <
            /label> < /
            div > <
            /div> < /
            div > <
            div className = "input-field input-field__textarea" >
            <
            div className = "input-field__icon" >
            <
            FontAwesomeIcon icon = "comments"
            className = "input-field__fa" / >
            <
            /div> <
            div className = "input-field__wrapper" >
            <
            span > Message * < /span> <
            label >
            <
            textarea type = "text"
            value = {
                message
            }
            onChange = {
                this.handleChange('message')
            }
            required className = "input-field__input" >
            <
            /textarea> < /
            label > <
            /div> < /
            div > <
            div className = "input-field__checkbox" >
            <
            input type = "checkbox"
            id = "accept"
            required name = "accept" / >
            <
            label className = "checkbox__label"
            htmlFor = "accept" >
            I accept the information contained in the {
                ' '
            } <
            a href = "https://pagetidfy.com/privacy-policy"
            target = "_blank"
            rel = "noopener noreferrer"
            className = "default-link" >
            privacy policy <
            /a>
            .*
            <
            /label> < /
            div > <
            input type = "submit"
            className = "form__btn btn--gradient"
            value = "Submit" /
            >
            <
            /form> < /
            StyledContactForm >
        );
    }
}

export default ContactForm;
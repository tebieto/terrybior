import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';

import { signUpStart } from '../../redux/user/user.action';

import './sign-up.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { password, confirmPassword } =this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        const { signUpStart } = this.props;

        try {
            signUpStart(this.state)
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(error) {
            console.log('An error occured', error.message)
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        label='Display Name'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        label='Email'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        label='Password'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm password'
                        handleChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>Sign up</CustomButton>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userData => dispatch(signUpStart(userData))
})

export default connect(null, mapDispatchToProps)(SignUp);
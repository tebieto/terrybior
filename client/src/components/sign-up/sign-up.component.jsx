import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';

import { signUpStart } from '../../redux/user/user.action';

import './sign-up.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setCredentials] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });

    const {displayName, email, password, confirmPassword } = userCredentials;
    
    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            signUpStart(userCredentials)
            setCredentials({ displayName: '', email: '', password: '', confirmPassword: '' })
        } catch(error) {
            console.log('An error occured', error.message)
        }
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    label='Display Name'
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    label='Email'
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    label='Password'
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    label='Confirm password'
                    handleChange={handleChange}
                    required
                />
                <CustomButton type='submit'>Sign up</CustomButton>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userData => dispatch(signUpStart(userData))
})

export default connect(null, mapDispatchToProps)(SignUp);
import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';

import './sign-in.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [ userCredentials, setCredentials ] = useState({ email: '', password: ''});
   
    const { email, password } = userCredentials;
    
    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart({email, password})
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({...userCredentials, [name]: value})
    }
    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Signin with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    value={email}
                    handleChange={handleChange}
                    required
                    label='Email' 
                />
                <FormInput
                    name='password' 
                    type='password' 
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required 
                />
                <div className='buttons'>
                <CustomButton type='submit'>Sign in</CustomButton>
                <CustomButton type='button' isGoogleSignIn onClick={googleSignInStart}>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: emailAndPassword => dispatch(emailSignInStart(emailAndPassword))
});

export default connect(null, mapDispatchToProps)(SignIn);
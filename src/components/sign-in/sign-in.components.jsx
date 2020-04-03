import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch(error) {
            console.log('An error occured', error.message)
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Signin with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={email}
                        handleChange={this.handleChange}
                        required
                        label='Email' 
                    />
                    <FormInput
                        name='password' 
                        type='password' 
                        value={password}
                        handleChange={this.handleChange}
                        label='Password'
                        required 
                    />
                    <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' isGoogleSigIn onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';

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
        const { emailSignInStart } = this.props
        const { email, password } = this.state;
        emailSignInStart({email, password})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;
        const { googleSignInStart } = this.props;
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
                    <CustomButton type='button' isGoogleSignIn onClick={googleSignInStart}>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: emailAndPassword => dispatch(emailSignInStart(emailAndPassword))
});

export default connect(null, mapDispatchToProps)(SignIn);
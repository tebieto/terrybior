import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_5KNKLhBxPHV6ZlHS8qgzdROK00MijUSq6Z';

    const onToken = token => {
        console.log('token:', token)
    }

    return (
        <StripeCheckout
            label='Pay Now' 
            name='Terry Bior Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
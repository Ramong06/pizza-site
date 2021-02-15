import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>PIZZA OF THE DAY</h1>
            <p>Supreme-ish Pizza sprinkled with 24 carat gold salt.</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature;

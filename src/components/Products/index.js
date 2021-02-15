import React from 'react';
import {
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductsElements';

const Products = ({ heading, data }) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((pizza, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={pizza.img} alt={pizza.alt} />
                            <ProductInfo>
                                <ProductTitle>{pizza.name}</ProductTitle>
                                <ProductDesc>{pizza.desc}</ProductDesc>
                                <ProductPrice>{pizza.price}</ProductPrice>
                                <ProductButton>{pizza.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products


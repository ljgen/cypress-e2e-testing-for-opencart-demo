import { ProductSelection } from '../support/pages/productSelection';

describe('Product Selection Tests', () => {
    const productSelection = new ProductSelection();

    beforeEach(() => {
        cy.visit('/');
        cy.wait(2000);
    });

    it('Select a product from the homepage', () => {
        productSelection.selectProductFromHomepage();
        productSelection.verifyProductDetailPage();
    });

    it('Display the correct product image on the detail page', () => {
        productSelection.selectProductFromHomepage();
        productSelection.verifyProductImageDisplayed();
    });

    it('Show correct stock status on the product detail page', () => {
        productSelection.selectProductFromHomepage();
        productSelection.verifyProductStockStatus();
    });

    it('Add product to cart and display notification', () => {
        productSelection.selectProductFromHomepage();
        productSelection.verifyAddToCartFunctionality();
    });
});

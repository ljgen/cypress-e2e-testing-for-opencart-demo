export class ProductSelection {
    selectProductFromHomepage() {
        // Click on the first product displayed on the homepage.
        cy.get('.row-cols-1 > .col.mb-3 > .product-thumb > .image').first().click();
    }

    verifyProductDetailPage() {
        cy.get('h1').should('be.visible');
        cy.get('.price-new').should('be.visible');
        cy.get('#button-cart').should('be.visible');
    }

    verifyProductImageDisplayed() {
        cy.get('.img-thumbnail').should('be.visible');
    }

    verifyProductStockStatus() {
        cy.get('.col-sm > .list-unstyled').should('contain.text', 'In Stock');
    }

    verifyAddToCartFunctionality() {
        cy.get('#button-cart').click();
        cy.get('#alert').should('be.visible');
    }
}

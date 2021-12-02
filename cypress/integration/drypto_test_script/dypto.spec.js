///< reference types = "cypress" />


describe(`dypto-cypress automation suite`, () => {
    
    it(`To verify Etherum is selected`, () => {
        
        cy.visit('/')
        cy.get('.Home_title__T09hD h1').should('contain', 'Drypto')                                     // to verify 'Drypto' title
        cy.get('.Home_asset__Qbco_ .Home_caret__c6Uk2', {timeout: 50000}).click()                       // to click drop down field
        cy.contains('Ethereum', {timeout: 50000}).click().wait(1000)                                    // to select 'Ethereum' option
        cy.get('.Home_asset__Qbco_ .Home_assetText__o_glR', {timeout: 5000}).should('contain', 'ETH')   // to verify field
        cy.get('.Home_amount__ImoJo', {timeout: 5000}).type(500)                                        // to add data in amount field
        cy.get('.Home_buy__ZvRus').should('contain', 'Buy').click()                                     // to verify and click Buy button
        cy.contains('Purchased $500 Ethereum!', {timeout: 50000})                                       // to verify success message

    })

    it(`To verify Bitcoin is selected`, () => {
        
        cy.visit('/')
        cy.get('.Home_title__T09hD h1').should('contain', 'Drypto')                                     // to verify 'Drypto' title
        cy.get('.Home_asset__Qbco_ .Home_caret__c6Uk2', {timeout: 50000}).click()                       // to click drop down field
        cy.contains('Bitcoin', {timeout: 50000}).click().wait(1000)                                     // to select 'Bitcoin' option
        cy.get('.Home_asset__Qbco_ .Home_assetText__o_glR', {timeout: 5000}).should('contain', 'BTC')   // to verify field
        cy.get('.Home_amount__ImoJo', {timeout:5000}).type(300)                                         // to add data in amount field
        cy.get('.Home_buy__ZvRus').should('contain', 'Buy').click()                                     // to verify and click Buy button
        cy.contains('Purchased $300 Bitcoin!', {timeout: 50000})                                        // to verify success message

    })

    it(`To verify Solana is selected`, () => {
        
        cy.visit('/')
        cy.get('.Home_title__T09hD h1').should('contain', 'Drypto')                                     // to verify 'Drypto' title
        cy.get('.Home_asset__Qbco_ .Home_caret__c6Uk2', {timeout: 50000}).click()                       // to click drop down field
        cy.contains('Solana').click().wait(1000)                                                        // to select 'Solana' option
        cy.get('.Home_asset__Qbco_ .Home_assetText__o_glR').should('contain', 'SOL')                    // to verify 'SOL' label
        cy.get('.Home_amount__ImoJo', {timeout: 50000}).type(900)                                       // to add data in amount field
        cy.get('.Home_buy__ZvRus').should('contain', 'Buy').click()                                     // to verify and click Buy button
        cy.contains('Purchased $900 Solana!', {timeout: 50000})                                         // to verify success message

    })
})
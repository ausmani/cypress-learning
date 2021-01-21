
describe('Test Cases for Flow',function () {

    it('Test Sign In ',function () {
        cy.visit('/');
        // cy.get('a').contains('Sign Up').click()
        cy.get('input[placeholder="User Email"]').type(getRandonUserName()+'@gmail.com');
        cy.get('input[placeholder="User Password"]').type(getRandonUserName()+'12354');
        cy.get('button').contains('Log In').click();
        //cy.wait(2000) // wait of 2 seconds
        cy.url().should('include','/home');
         cy.get('h3').should('have.text','Posts');
    })



    it('Should be able to create a new post', function () {

        cy.get('a').contains('Post').click()
        cy.url().should('include','/post/create');
        cy.get('input[placeholder="Title"]').type("Dense fog engulfs Karachi amid cold weather");
        cy.get('textarea[placeholder="Description"]').type("As cold and dry wave prevails across the country, Karachi and Lahore were engulfed in dense fog early Thursday.\n" +
            "\n" +
            "Pakistan Meteorological Department (PMD) said Karachi’s II Chundrigar Road, Shahra e Faisal, University Road, Super Highway and other parts of the metropolis were covered in fog with general visibility up to 200 metres.");
        cy.get('button').contains('Create').click();
        cy.url().should('eq',Cypress.config().baseUrl+'/home');
        cy.get('h5').should('contain','Dense fog engulfs Karachi amid cold weather');
    });

     it('should Test Sign out button', function () {
        cy.get('.signout').click();
    });

    it('should Test Sign Up', function () {

        cy.get('.userSignUp').click();
        cy.get('input[placeholder="First Name"]').type(getRandonUserName());
        cy.get('input[placeholder="Last Name"]').type(getRandonUserName());
        cy.get('input[placeholder="SignUp Email"]').type(getRandonUserName()+'@gmail.com');
        cy.get('input[placeholder="SignUp Password"]').type(getRandonUserName());
        cy.get('input[placeholder="Confirm Password"]').type(getRandonUserName());
        cy.get('input[type="checkbox"]').click();
        cy.get('button').contains('Register Now').click();
        cy.get('h3').should('have.text','Posts');
    });


    function getRandonUserName() {

        var text ="";
        var possible ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 5;i++){
            text+=possible.charAt(Math.floor(Math.random()*possible.length))
        }
        return text;
    }

})
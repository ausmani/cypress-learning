
describe('Test Cases for Flow',function () {

    it('Test Sign In ',function () {
        cy.visit('/');
        // cy.get('a').contains('Sign Up').click()
        cy.get('input[placeholder="User Email"]').type(getRandonUserName()+'@gmail.com');
        cy.get('input[placeholder="User Password"]').type(getRandonUserName()+'12354');
        cy.get('button').contains('Log In').click();
        cy.get('.about').should('have.text','About')
    })


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
        cy.get('.about').should('have.text','About')
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
/// <reference types="Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
var canvas = document.createElement("canvas");
var x,y;


Given('Open chrome browser and start application', () => {
  cy.visit('https://www.online-calculator.com/full-screen-calculator/')
})

When('I enter following values and press CE button', (datatable) => {
  cy.get('iframe')
    .wait(300)
    .its('0.contentDocument.body')
    .find('[id="animation_container"]').within(() => {
      cy.get('canvas').then($e => {
        cy.wrap($e).location()
        x=canvas.width
        y=canvas.height 
        cy.log(x)
        cy.log(y)
        const table=datatable.hashes()
        table.forEach(row => {
          cy.log(row.value)
          cy.fixture('data/poslist.json').then((pos) => {
            if (row.value == 0) {
              cy.get('canvas').click(pos.key_0.width, pos.key_0.height)
            }
            else if (row.value == 1) {
              cy.get('canvas').click(pos.key_1.width, pos.key_1.height)
            }
            else if (row.value == 2) {
              cy.get('canvas').click(pos.key_2.width, pos.key_2.height)
            }
            else if (row.value == 3) {
              cy.get('canvas').click(pos.key_3.width, pos.key_3.height)
            }
            else if (row.value == 4) {
              cy.get('canvas').click(pos.key_4.width, pos.key_4.height)
            }
            else if (row.value == 5) {
              cy.get('canvas').click(pos.key_5.width, pos.key_5.height)
            }
            else if (row.value == 6) {
              cy.get('canvas').click(pos.key_6.width, pos.key_6.height)
            }
            else if (row.value == 7) {
              cy.get('canvas').click(pos.key_7.width, pos.key_7.height)
            }
            else if (row.value == 8) {
              cy.get('canvas').click(pos.key_8.width, pos.key_8.height)
            }
            else if (row.value == 9) {
              cy.get('canvas').click(pos.key_9.width, pos.key_9.height)
            }
            else if (row.value == '+') {
              cy.get('canvas').click(pos.key_10.width, pos.key_10.height)
            }
            else if (row.value == '-') {
              cy.get('canvas').click(pos.key_11.width, pos.key_11.height)
            }
            else if (row.value == 'x') {
              cy.get('canvas').click(pos.key_12.width, pos.key_12.height)
            }
            else if (row.value == '/') {
              cy.get('canvas').click(pos.key_13.width, pos.key_13.height)
            }
          })
        })
        cy.get('canvas').click(300, 450).screenshot()
      })
    })

})

Then('I should be able to see', (datatable) => {
  datatable.hashes().forEach(row => {
    cy.log("expected: " + row.value)
})
})
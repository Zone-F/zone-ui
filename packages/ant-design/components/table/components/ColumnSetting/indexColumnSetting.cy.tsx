import React from 'react'
import ColumnSetting from './index'

describe('<ColumnSetting />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ColumnSetting />)
    cy.get('span').should('have.text', '0')

  })
})
/**
 * @ Author: zone98f
 * @ Create Time: 2023-04-11 20:06:58
 * @ Modified by: zone98f
 * @ Modified time: 2023-04-13 11:54:23
 * @ Description: 表格列设置组件
 * -弹窗开启
 * -弹窗关闭
 * -组件渲染列表的初始值
 * -搜索框搜索关键词
 * -搜索框清空关键词
 * -点击子项的复选框
 */

import React from 'react'
import ColumnSetting from './index'

describe('<ColumnSetting />', () => {
  it('render', () => {
    cy.mount(<ColumnSetting />)
    // 
    cy.get('[data-testid="columnSetting-icon"]').should('exist')
  })

  it.skip('Tooltip Title', () => {
    cy.mount(<ColumnSetting />)
    // 
    cy.get('span').should('have.text', '0')
  })
  
  it('columnSetting open checkable', () => {
    cy.mount(<ColumnSetting />)
    cy.get('[data-testid="columnSetting-icon"]').click()
    cy.get('.ant-popover').should('exist')
  })
  
  it('columnSetting close checkable', () => {
    cy.mount(<ColumnSetting />)
    cy.get('[data-testid="columnSetting-icon"]').click()
    cy.get('body').click()
    cy.get('.ant-popover').should('have.class','ant-popover-hidden')
  })
  
  it.skip('columnSetting render list check', () => {
    // see: https://on.cypress.io/mounting-react
    const defaultColumns = [];

    cy.mount(<ColumnSetting />)

    cy.get('span').should('have.text', '0')

  })
  
  it.skip('search', () => { })
  
  it.skip('reset search', () => { })
  
  it.skip('columnSetting select one', () => { })
})
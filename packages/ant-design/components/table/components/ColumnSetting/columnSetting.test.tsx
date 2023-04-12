/**
 * @ Author: zone98f
 * @ Create Time: 2023-04-11 20:06:58
 * @ Modified by: zone98f
 * @ Modified time: 2023-04-12 17:31:32
 * @ Description: 表格列设置组件
 * -弹窗开启
 * -弹窗关闭
 * -组件渲染列表的初始值
 * -搜索框搜索关键词
 * -搜索框清空关键词
 * -点击子项的复选框
 */

import React from 'react'
import { render, screen } from '@testing-library/react';
import { describe, it, expect, test,vi } from 'vitest';
import ColumnSetting from './index'

describe('ColumnSetting', () => {
  // it 用来定义单条用例
  test('render', () => {
    // 通过 render 来渲染组件到 jsdom 中
    render(<ColumnSetting />);
    // expect(screen.getByTestId('columnSetting-icon')).toBeInTheDocument();
    expect(screen.getByTestId('columnSetting-icon')).toBe(true);
  });
  // test('test', () => {
  //   // 通过 render 来渲染组件到 jsdom 中
  //   expect(1+1).toBe(2)
  // });

  // it('ColumnSetting render', () => {
  //   // 通过 render 来渲染组件到 jsdom 中
  //   const { container } = render(<ColumnSetting />);
  //   expect(screen.getByTestId('columnSetting-icon')).toBe(true);
  // });
});
// describe('ColumnSetting2', () => {
//   // it 用来定义单条用例
//   // it('render', () => {
//   //   // 通过 render 来渲染组件到 jsdom 中
//   //   const { container } = render(<ColumnSetting />);
//   //   expect(screen.getByTestId('columnSetting-icon')).toBeInTheDocument();
//   // });
//   it('test', () => {
//     // 通过 render 来渲染组件到 jsdom 中
//     expect(1+1).toBe(2)
//   });

//   test('ColumnSetting render', () => {
//     // 通过 render 来渲染组件到 jsdom 中
//     const { container } = render(<ColumnSetting />);
//     expect(screen.getByTestId('columnSetting-icon')).toBe(true);
//   });
// });
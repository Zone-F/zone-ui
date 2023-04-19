/**
 * @ Author: zone98f
 * @ Create Time: 2023-04-11 20:06:58
 * @ Modified by: zone98f
 * @ Modified time: 2023-04-19 17:12:01
 * @ Description: 表格列设置组件
 */

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ColumnSetting from './index';
import { describe, expect } from '@jest/globals';

describe('<ColumnSetting />', () => {
  it('render', () => {
    render(<ColumnSetting />)
    const settingIcon = screen.getByRole("column-setting-icon");
    expect(settingIcon).toBeInTheDocument();
  })
})
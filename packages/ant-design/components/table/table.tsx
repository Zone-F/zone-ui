/**
 * @ Author: zone98f
 * @ Create Time: 2023-04-07 19:55:56
 * @ Modified by: zone98f
 * @ Modified time: 2023-04-09 22:09:50
 * @ Description: 这个组件实际上也可以叫做：warpRenderTaber
 * 在此进行一些通用的业务封装以及renderTable组件的扩展功能
 */

import React, { useContext,useMemo } from 'react'
import TableRender, { TableRenderProps } from 'table-render';
import { Button } from 'antd';
import type { TableProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ColumnSetting from './components/ColumnSetting';
import { Container, TableContext } from './Store/Provide';
import type { ProTableProps } from './typing';




const XDLKTable = (props: TableRenderProps) => {
  const counter = useContext(TableContext);
    console.log('counter',counter);
    
    // 用于渲染的列
    const proColumns = useMemo(() => {
      return props.columns.filter((column) => {
        const key = column?.key || column?.dataIndex
        return counter.columnsMap[key].show;
      })
    }, [props.columns, counter.columnsMap])
    console.log('proColumns---',proColumns);

  return (
    <Container initValue={props}>
      <TableRender
        {...props}
        columns={props.proColumns}
        toolbarRender={
          <>
            {props.toolbarRender}
            <ColumnSetting columns={props.columns} />
          </>
        }
      />
    </Container>
  );
}

export default XDLKTable;
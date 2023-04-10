/**
 * @ Author: zone98f
 * @ Create Time: 2023-04-07 19:55:56
 * @ Modified by: zone98f
 * @ Modified time: 2023-04-10 11:15:23
 * @ Description: 这个组件实际上也可以叫做：warpRenderTaber
 * 在此进行一些通用的业务封装以及renderTable组件的扩展功能
 */

import React, { useContext, useMemo } from 'react'
import TableRender, { TableRenderProps } from 'table-render';
import type { TableProps } from 'antd';
import ColumnSetting from './components/ColumnSetting';
import { Container, TableContext } from './Store/Provide';
import type { ProTableProps } from './typing';


const ProTableRender = (props: TableRenderProps) => {
  const counter = useContext(TableContext);
  // 用于渲染的列
  const proColumns = useMemo(() => {
    return props.columns.filter((column) => {
      const key = column?.key || column?.dataIndex
      return counter.columnsMap[key].show;
    })
  }, [props.columns, counter.columnsMap])

  return (
    <>
      <TableRender
        {...props}
        columns={proColumns}
        toolbarRender={
          <>
            {props.toolbarRender}
            <ColumnSetting columns={props.columns} />
          </>
        }
      />
    </>
  )
}
console.log(2);


const XDLKTable = (props: TableRenderProps) => {
  return (
    <>
     <Container initValue={props}>
      <ProTableRender {...props} />
    </Container>
    </>
  );
}

export default XDLKTable;
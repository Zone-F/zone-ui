import React from 'react'
import TableRender,{TableRenderProps} from 'table-render';
import { Button } from 'antd';
import type { TableProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ColumnSetting from './components/ColumnSetting';
import { Container } from './Store/Provide';
import type { ProTableProps } from './typing';

const XDLKTable = (props:any) => {
  return (
    <Container initValue={props}>
      <TableRender
        {...props}
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
import React from 'react'
import TableRender from 'table-render';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ColumnSetting from './components/ColumnSetting';
// const XDLKTable = () => {
//   return <Button type="primary">vc-ant-design的按钮</Button>
// }

// export default XDLKTable;

const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    id: i.toString(),
    title: `标题${i + 1}`,
    created_at: new Date().getTime(),
  });
}

const schema = {
  type: 'object',
  labelWidth: 70,
  properties: {
    title: {
      title: '标题',
      type: 'string'
    },
    created_at: {
      title: '创建时间',
      type: 'string',
      format: 'date'
    }
  }
};

const columns = [
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '创建时间',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '操作',
    render: (row, record) => <a onClick={() => alert(row.title)}>编辑</a>,
  }
];

const XDLKTable = () => {
  
  const api = () => {
    return {
      data: dataSource,
      total: dataSource.length
    };
  };

  return (
    <TableRender
      search={{ schema }}
      request={api}
      columns={columns}
      title='最简表格'
      toolbarRender={ 
        <>
          <Button>查看日志</Button>
          <Button>导出数据</Button>
          <Button type='primary'>
            <PlusOutlined />
            新增
          </Button>
          <ColumnSetting />
        </>
      }
    />
  );
}

export default XDLKTable;
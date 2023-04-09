import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react'
// import { XDLKTable } from '../../dist/zone-ant-design'
import { XDLKTable } from '../../components/table'
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
    key: 'title',
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
    key: 'operation',
    dataIndex: 'operation',
    render: (row, record) => <a onClick={() => alert(row.title)}>编辑</a>,
  }
];

const table = () => {
  const api = () => {
    return {
      data: dataSource,
      total: dataSource.length
    };
  };

  return <>
    <XDLKTable
      search={{ schema }}
      request={api}
      columns={columns}
      title='最简表格'
      columnsState={{
        "persistenceKey": 'test'
      }}
      toolbarRender={
        <>
          <Button>查看日志</Button>
          <Button>导出数据</Button>
        </>
      }
    />
  </>
}

export default table
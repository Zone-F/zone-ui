import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react'
import { XDLKTable } from '../../dist/zone-ant-design'
// import { XDLKTable } from '@zone-ui/zone-antd-ui'
// import { XDLKTable } from '../../components/table'
const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    id: i.toString(),
    title: `标题${i + 1}`,
    created_at: new Date().getTime(),
  });
}

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
  }
];

const table = () => {
  const api = () => {
    return {
      data: dataSource,
      total: dataSource.length
    };
  };

  return (
    <>
      <XDLKTable
        style={{ width: '500px' }}
        request={api}
        columns={columns}
        title='列缓存表格'
        columnsState={{
          "persistenceKey": 'test'
        }}
      />
    </>)
}

export default table
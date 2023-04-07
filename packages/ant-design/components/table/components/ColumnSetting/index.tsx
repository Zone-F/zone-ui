import { SettingOutlined, AudioOutlined } from '@ant-design/icons';
import { Button, Divider, Space, TableColumnType } from 'antd';
import type { ProColumnsType } from 'table-render';
import { Popover, Input, Tooltip } from 'antd';
import classNames from 'classNames'
import React, { useContext, useState } from 'react';
import { TableContext } from '../../Store/Provide';
const { Search } = Input

type ColumnSettingProps<T = any> = {
  columns: TableColumnType<T>[];
};

const SetBoxListList: React.FC<{
  columnKey: string | number;
  className?: string;
  title?: string
}> = ({ columnKey, title, className }) => {
  return (
    <div>{title}</div>
  )
}
const SetBoxList: React.FC<{
  localColumns: (ProColumnsType<{}> & { index?: number })[];
}> = ({ localColumns }) => {
  return (
    <>
      {localColumns.map(
        list =>
          <SetBoxListList
            columnKey={list.columnKey}
            title={list.title}
            key={list.columnKey} />
      )}
      <Divider></Divider>
      <Space direction="vertical">
        <Space wrap>
          <Button size='small'>取消</Button>
          <Button type="primary" size='small'>
            确定
          </Button>
        </Space>
      </Space>
    </>
  );
};

function ColumnSetting<T>(props: ColumnSettingProps<T>) {

  const counter = useContext(TableContext);
  const localColumns: TableColumnType<T> &
    {
      index?: number;
      fixed?: any;
      key?: any;
    }[] = props.columns;
  const { columnsMap, setColumnsMap } = counter;
  console.log('localColumns', localColumns);
  console.log('columnsMap', columnsMap);

  function handleOpenChange(state: boolean) { setPopoverShow(state) }
  const [popoverShow, setPopoverShow] = useState(false);

  const renderColmns = [JSON.parse(JSON.stringify(localColumns))]

  /**
   * 搜索函数
   */
  function onSearch() { }

  return (
    <Popover
      arrow={false}
      title={
        <Search
          placeholder='搜索'
          onSearch={onSearch}
        />
      }
      content={
        <SetBoxList
          localColumns={localColumns}
        />
      }
      trigger="click"
      placement="bottomRight"
      open={popoverShow}
      onOpenChange={handleOpenChange}
    >
      <Tooltip title="列设置">
        <SettingOutlined onClick={() => setPopoverShow(!popoverShow)} />
      </Tooltip>
    </Popover>
  )
}
export default ColumnSetting;
import { SettingOutlined, AudioOutlined } from '@ant-design/icons';
import { Button, Checkbox, Divider, Space, Table, TableColumnType } from 'antd';
import type { ProColumnsType } from 'table-render';
import { Popover, Input, Tooltip } from 'antd';
import classNames from 'classNames'
import React, { memo, useContext, useMemo, useState } from 'react';
import { TableContext } from '../../Store/Provide';
import { ColumnsState } from '../../typing';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useEffect } from 'react';
import Item from 'antd/es/list/Item';
const { Search } = Input

type ColumnSettingProps<T = any> = {
  columns: TableColumnType<T>[];
};

const SetBoxListItem: React.FC<{ title: string } & ColumnsState> = (props) => {
  // const [checked, setChecked] = useState(props.show);
  // const onChange = (e: CheckboxChangeEvent) => setChecked(e.target.checked);
  // onChange={onChange}
  // console.log('title',props.title ,'checked',checked,'props.show',props.show);
  console.log('title', props.title, 'props.show', props.show);
  return (
    <div>
      <Checkbox
        defaultChecked={props.show}
        disabled={props.disable}>
        {props.title}
      </Checkbox>
    </div>
  )
}

const SetBoxList: React.FC<{ columns: TableColumnType<any>[] }> = (props) => {

  // const renderColumns: TableColumnType<string>[] = useMemo(() => {
  //   let columns = JSON.parse(JSON.stringify(props.columns))
  //   return columns.map(column => {
  //     const key = column?.key || column?.dataIndex
  //     return {
  //       title: column.title,
  //       ...columnsMap[key]
  //     }
  //   })
  // }, [props.columns, columnsMap]);
  // let columns = JSON.parse(JSON.stringify(props.columns))


  // console.log('SetBoxList Update');
  // console.log('renderColumns', renderColumns);
  // function itemChange(key,show){
  //   console.log('1',key);
  //   console.log('1',renderColumns);
  //   renderColumns.find(item=>item.title === key).show = !show
  //   setRenderColumns(renderColumns)
  // renderColumns[key].show = !show
  // }
  // <SetBoxListItem {...column} key={column.title as string} />
  return (
    <>
      {props.columns?.map(column =>
        <>
          <div>
            <Checkbox
            checked={column.show}
              defaultChecked={column.show}
              disabled={column.disable}
            >
              {column?.title}
            </Checkbox>
          </div>
        </>
      )}
    </>
  )
}
console.log('ColumnSetting Update ---');

const SetBoxContent: React.FC<{
  columns: TableColumnType<any>[]
  handleOpenChange: (state: boolean) => void
}> = ({ columns, handleOpenChange }) => {
  const { columnsMap } = useContext(TableContext);

  let proColumns = JSON.parse(JSON.stringify(columns));
  proColumns = columns.map(column => {
    const key = column?.key || column?.dataIndex
    return {
      title: column.title,
      date: Date.now(),
      ...columnsMap[key]
    }
  })
  const [renderColumns, setRenderColumns] = useState<{ title: string } & ColumnsState[]>(proColumns);
  function handleCancle() {
    console.log('proColumns1',proColumns);

    handleOpenChange(false);
    proColumns = columns.map(column => {
      const key = column?.key || column?.dataIndex
      return {
        title: column.title,
        date: Date.now(),
        ...columnsMap[key]
      }
    })
    console.log('proColumns',proColumns);
    setRenderColumns(proColumns)
  }
  return (
    <>
      <SetBoxList columns={renderColumns} />
      <Divider></Divider>
      <Space direction="vertical">
        <Space wrap>
          <Button size='small' onClick={() => handleCancle()}>取消</Button>
          <Button type="primary" size='small'>
            确定
          </Button>
        </Space>
      </Space>
    </>
  );
};

function ColumnSetting<T>(props: ColumnSettingProps<T>) {

  function handleOpenChange(state: boolean) { setPopoverShow(state) }
  const [popoverShow, setPopoverShow] = useState(false);

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
        <SetBoxContent columns={props.columns} handleOpenChange={handleOpenChange} />
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
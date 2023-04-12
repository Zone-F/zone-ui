import { SettingOutlined, AudioOutlined } from '@ant-design/icons';
import { Button, Checkbox, Divider, Space, Table, TableColumnType } from 'antd';
import type { ProColumnsType } from 'table-render';
import { Popover, Input, Tooltip } from 'antd';
import classNames from 'classNames'
import React, { memo, useContext, useEffect, useMemo, useState } from 'react';
import { TableContext } from '../../Store/Provide';
import { ColumnsState } from '../../typing';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
const { Search } = Input


type SetBoxListItem = {
  column: ColumnsState,
  updateColumnsMap: (state: ColumnsState) => void
}
const SetBoxListItem: React.FC<SetBoxListItem> = ({ column, updateColumnsMap }) => {
  const [checked, setChecked] = useState(column.show);

  const onChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
    updateColumnsMap({ ...column, show: e.target.checked })
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={onChange}
        disabled={column.disable}>
        {column.title}
      </Checkbox>
    </div>
  )
}
// 列表
const SetBoxList: React.FC<{ searchKey: string }> = ({ searchKey }) => {
  const { columnsMap, setColumnsMap } = useContext(TableContext);
  const renderColumns: ColumnsState[] = useMemo(() => {
    let columns = []
    for (const iterator in columnsMap) {
      columns.push(columnsMap[iterator])
    }
    return columns.filter((column) => column.title.includes(searchKey))
  }, [columnsMap, searchKey]);

  // let columns = JSON.parse(JSON.stringify(props.columns))

  /**
   * 更新列表
   * @param data 
   */
  function updateColumnsMap(data: ColumnsState) {
    let newMap = { ...columnsMap, [data.key]: data }
    setColumnsMap(newMap)
  }

  return (
    <>
      {renderColumns?.map(
        column =>
          <SetBoxListItem column={column} key={column.key} updateColumnsMap={updateColumnsMap} />
      )}
    </>
  )
}
// console.log('ColumnSetting Update ---');

function ColumnSetting() {

  function handleOpenChange(state: boolean) { setPopoverShow(state) }
  const [popoverShow, setPopoverShow] = useState(false);

  // 搜索框
  const [searchKey, setSearchKey] = useState('');

  /**
   * 搜索函数
   * @param value 
   */
  function onSearch(value: string) {
    setSearchKey(value)
  }
  // 搜索框end
  return (
    <Popover
      arrow={false}
      title={
        <Search
          placeholder='搜索'
          onSearch={onSearch}
        />
      }
      content={<SetBoxList searchKey={searchKey} />}
      trigger="click"
      placement="bottomRight"
      open={popoverShow}
      onOpenChange={handleOpenChange}
    >
      <Tooltip title="列设置">
        <SettingOutlined data-testid='columnSetting-icon' onClick={() => setPopoverShow(!popoverShow)} />
      </Tooltip>
    </Popover>
  )
}
export default ColumnSetting;
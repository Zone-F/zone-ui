import { SettingOutlined, AudioOutlined } from '@ant-design/icons';
import type { TableColumnType } from 'antd';
import { Popover, Input, Tooltip } from 'antd';
import React,{ useState } from 'react';
const { Search } = Input

type Search = {
  placeholder?: string
}
type ColumnSettingProps<T = any> = {
  columns: TableColumnType<T>[];
  checkable?: boolean;
  checkedReset?: boolean;
  search?: Search
};

// 列表项
const SettingListItem: React.FC<{
  list: (TableColumnType<any> & { index?: number })[];
  className?: string;
  title: string;
  draggable: boolean;
  checkable: boolean;
  showTitle?: boolean;
  listHeight?: number;
}> = () => {
  return (
    <div></div>
  )
}
// 列表
const SettingList: React.FC<{
  localColumns: (ProColumns<any> & { index?: number })[];
  className?: string;
  draggable: boolean;
  checkable: boolean;
  listsHeight?: number;
}> = ({ localColumns, className, draggable, checkable, listsHeight }) => {
  return (
    <SettingItem />
  )
}

function ColumnSetting<T>(props: ColumnSettingProps<T>) {
  /**
   * 搜索函数
   */
  function onSearch() { }
  function handleOpenChange(state) { 
    setPopoverShow(state)
  }
  const [popoverShow, setPopoverShow] = useState(false);

  return (
    <Popover
      arrow={false}
      title={
        <Search
          placeholder={props?.search?.placeholder || '请输入列名'}
          onSearch={onSearch}
        />
      }
      content={<a></a>}
      trigger="click"
      placement="bottomRight"
      open={popoverShow}
      onOpenChange={handleOpenChange}
    >
      <Tooltip title="列设置">
        <SettingOutlined onClick={()=>setPopoverShow(!popoverShow)}/>
      </Tooltip>
    </Popover>
  )
}
export default ColumnSetting;
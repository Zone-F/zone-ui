import { SettingOutlined, AudioOutlined } from '@ant-design/icons';
import type { TableColumnType } from 'antd';
import { Popover, Input, Tooltip } from 'antd';
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
const SettingListItem : React.FC<{
  list: (ProColumns<any> & { index?: number })[];
  className?: string;
  title: string;
  draggable: boolean;
  checkable: boolean;
  showTitle?: boolean;
  listHeight?: number;
}> = ()=>{
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
  return (
    <Popover
      arrow={false}
      title={
        <Search
          placeholder={props.search.placeholder || '请输入列名'}
          onSearch={onSearch}
        />
      }
      content={<a></a>}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Tooltip title={intl.getMessage('tableToolBar.columnSetting', '列设置')}>
        <SettingOutlined />
      </Tooltip>
    </Popover>
  )
}
export default ColumnSetting;
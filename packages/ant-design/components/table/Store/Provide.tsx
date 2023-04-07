import { createContext, useCallback, useEffect, useMemo, useRef } from "react";
import { ColumnsState, ColumnsStateType, ProTableProps } from "../typing";
import { genColumnKey } from '../utils';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import type { ProColumnsType, TableRenderProps } from "table-render";
import { ColumnsType } from "antd/es/table";

const persistenceType = 'localStorage';
export type ProTableColumn<T> = ColumnsState & ProColumnsType<{}>;
export type UseContainerProps<T = any>  = {
  columns?: ProTableColumn<T>[];
  // columnsState?: ProTableProps<any, any, any>['columnsState'];
  columnsState?: ColumnsStateType;
};

function useContainer(props: UseContainerProps<any>) {
  console.log('props',props);
  
  /** 默认全选中 */
  const defaultColumnKeyMap = useMemo(() => {
    if (props?.columnsState?.defaultValue) return props.columnsState.defaultValue;
    const columnKeyMap = {};
    props.columns?.forEach(({ key, dataIndex, fixed, disable }, index) => {
      const columnKey = genColumnKey(key ?? (dataIndex as React.Key), index);
      if (columnKey) {
        columnKeyMap[columnKey] = {
          show: true,
          fixed,
          disable,
        };
      }
    });
    return columnKeyMap;
  }, [props.columns]);

  const [columnsMap, setColumnsMap] = useMergedState<Record<string, ColumnsState>>(
    () => {
      const { persistenceKey } = props.columnsState || {};

      if (persistenceKey && typeof window !== 'undefined') {
        /** 从持久化中读取数据 */
        const storage = window['localStorage'];
        try {
          const storageValue = storage?.getItem(persistenceKey);
          if (storageValue) {
            return JSON.parse(storageValue);
          }
        } catch (error) {
          console.warn(error);
        }
      }
      return (
        props.columnsState?.value ||
        props.columnsState?.defaultValue ||
        defaultColumnKeyMap
      );
    },
    {
      value: props.columnsState?.value,
      onChange: props.columnsState?.onChange,
    },
  );
  console.log('columnsMap',columnsMap);
  
  /**  配置或列更改时对columnsMap重新赋值 */
  useEffect(() => {
    const { persistenceKey } = props.columnsState || {};

    if (persistenceKey && typeof window !== 'undefined') {
      /** 从持久化中读取数据 */
      const storage = window['localStorage'];
      try {
        const storageValue = storage?.getItem(persistenceKey);
        if (storageValue) {
          setColumnsMap(JSON.parse(storageValue));
        } else {
          setColumnsMap(defaultColumnKeyMap);
        }
      } catch (error) {
        console.warn(error);
      }
    }
  }, [props.columnsState, defaultColumnKeyMap, setColumnsMap]);

  /** 清空一下当前的 key */
  const clearPersistenceStorage = useCallback(() => {
    const { persistenceKey } = props.columnsState || {};

    if (!persistenceKey || typeof window === 'undefined') return;

    /** 给持久化中设置数据 */
    const storage = window[persistenceType];
    try {
      storage?.removeItem(persistenceKey);
    } catch (error) {
      console.warn(error);
    }
  }, [props.columnsState]);

  useEffect(() => {
    if (!props.columnsState?.persistenceKey) return;

    if (typeof window === 'undefined') return;
    /** 给持久化中设置数据 */
    const { persistenceKey } = props.columnsState;
    const storage = window[persistenceType];
    try {
      storage?.setItem(persistenceKey, JSON.stringify(columnsMap));
    } catch (error) {
      console.warn(error);
      clearPersistenceStorage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.columnsState?.persistenceKey, columnsMap]);

  const renderValue = { columnsMap, setColumnsMap, defaultColumnKeyMap };

  return renderValue;
}

type ContainerReturnType = ReturnType<ContainerType>;

const TableContext = createContext<ContainerReturnType>({} as any);

export type ContainerType = typeof useContainer;

const Container: React.FC<{
  // TODO:: initValue: UseContainerProps<any>;
  initValue: any;
  children: React.ReactNode;
}> = (props) => {
  const value = useContainer(props.initValue);
  console.log('value',value);
  
  return (
    <TableContext.Provider value={value}>{props.children}</TableContext.Provider>
  );
};

export { TableContext, Container };

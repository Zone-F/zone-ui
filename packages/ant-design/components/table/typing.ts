import type { TableProps } from "antd";
import type { TableRenderProps } from "table-render";

export type ColumnsState = {
  show?: boolean;
  fixed?: "right" | "left" | undefined;
  order?: number;
  disable?:
  | boolean
  | {
    checkbox: boolean;
  };
};

export type ColumnsStateType = {
  /** 持久化的key，用于存储到 storage 中 */
  persistenceKey?: string;
  /** ColumnsState 的值，columnsStateMap将会废弃 */
  defaultValue?: Record<string, ColumnsState>;
  /** ColumnsState 的值，columnsStateMap将会废弃 */
  value?: Record<string, ColumnsState>;
  onChange?: (map: Record<string, ColumnsState>) => void;
};
export interface ProTableProps extends TableRenderProps {}
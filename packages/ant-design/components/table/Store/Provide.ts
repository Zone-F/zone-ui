import { createContext } from "react";

// type ContainerReturnType = ReturnType<ContainerType>;

// const TableContext = createContext<ContainerReturnType>({} as any);

// export type ContainerType = typeof useContainer;

const Container: React.FC<{ initValue: UseContainerProps<any>; children: React.ReactNode }> = (
  props,
) => {
  const value = useContainer(props.initValue);
  return <TableContext.Provider value={value}>{props.children}</TableContext.Provider>;
};

export { TableContext, Container };
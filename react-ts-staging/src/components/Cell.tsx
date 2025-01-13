import { PropsWithChildren } from 'react'

interface ICellProps<TData> {
  field: keyof TData;
}

/* eslint-disable-next-line */
const Cell = <T extends Record<string, any>>(props: PropsWithChildren<ICellProps<T>>) => {
  return <div>Cell { `${props.field as string}` }</div>
}

export default Cell

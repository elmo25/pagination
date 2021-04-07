import React, { HTMLAttributes, FC, useContext, useMemo } from "react";
import {PaginationContext} from './Pagination'

export const Prev:FC<HTMLAttributes<HTMLButtonElement>> = ({...restProps}) => {
  const {onChange, activePage} = useContext(PaginationContext);
  const isDisabled = useMemo<boolean>(() => activePage === 1, [activePage])
  return <button {...restProps} disabled={isDisabled} onClick={() => onChange(activePage - 1)}>{'<'}</button>
}
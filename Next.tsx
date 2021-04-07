import React, { HTMLAttributes, FC, useContext, useMemo } from "react";
import {PaginationContext} from './Pagination'

export const Next:FC<HTMLAttributes<HTMLButtonElement>> = ({...restProps}) => {
  const {onChange, activePage, total} = useContext(PaginationContext);
  const isDisabled = useMemo<boolean>(() => activePage === total, [activePage, total])

  return <button {...restProps} disabled={isDisabled} onClick={() => onChange(activePage + 1)}>{'>'}</button>
}
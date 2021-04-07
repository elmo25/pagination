import React, { HTMLAttributes, FC, useContext, useMemo } from "react";
import {PaginationContext} from './Pagination';

export interface IPaginationItem extends HTMLAttributes<HTMLButtonElement> {
  page: number;
}

export const Item:FC<IPaginationItem> = ({page, className = '', ...restProps}) => {
  const {onChange, activePage} = useContext(PaginationContext);
  const isActive = useMemo(() => activePage === page, [page, activePage]);
  const btnClasses = useMemo<string>(() => {
    return `${className || ''} ${isActive ? 'isActive' : ''}`
  }, [isActive, className]);
  return <button {...restProps} className={btnClasses} onClick={() => onChange(page)}>{page}</button>
}
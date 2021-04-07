import React, { HTMLAttributes, FC, createContext } from 'react'; 
import {Item} from './Item';
import {Next} from './Next';
import {Prev} from './Prev';
import {Ellipsis} from './Ellipsis';

export type TOnChange = (page:number) => void; 

export interface IPagination extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  activePage: number;
  onChange: TOnChange;
  total: number;
}

export interface IPaginationContext {
  activePage: number;
  onChange: TOnChange;
  total: number;
}

export const defaultChange = () => {
  //
};

export const PaginationContext = createContext<IPaginationContext>({
  activePage: 1,
  onChange: defaultChange,
  total: 1,
});

const BasePagination:FC<IPagination> = ({activePage, onChange, total, children, ...restProps}) => {
  return <div {...restProps}>
    <PaginationContext.Provider value={{activePage, onChange, total}}>
      {children}
    </PaginationContext.Provider>
  </div>
}

const paginationComponents = {
  Item,
  Next,
  Ellipsis,
  Prev,
};

export const Pagination = Object.assign(BasePagination, paginationComponents)
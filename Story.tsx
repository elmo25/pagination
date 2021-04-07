import React, {FC, useState} from 'react';
import {Pagination} from './Pagination'

export const Story:FC = () => {
  const [page, setPage] = useState<number>(2);

  return <div>
    <Pagination activePage={page} onChange={setPage} total={3} className={'story__pag'}>
      <Pagination.Prev/>
      <Pagination.Item page={1}/>
      <Pagination.Item page={2}/>
      <Pagination.Item page={3}/>
      <Pagination.Next/>
    </Pagination>
  </div>
}
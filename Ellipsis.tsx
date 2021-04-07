import React, { HTMLAttributes, FC } from "react"; 

export const Ellipsis:FC<HTMLAttributes<HTMLDivElement>> = ({...restProps}) => {
  return <div {...restProps}>...</div>
}
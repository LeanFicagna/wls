import React from 'react';
import { useSelectPage } from '../../../context/SelectPage';

type Props = {
  numberPage: number,
  className: String,
  children: React.ReactNode
}

export default function Botao({numberPage, className, children}: Props) {
  const {setPage} = useSelectPage();

  return (
    <button className={ className.toString() } onClick={() => setPage(numberPage)}>
      {children}
    </button>
  );
}

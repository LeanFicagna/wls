import React from 'react';

type Props = {
  className: String
}

export default function Usuario({ className }: Props) {
  return (
    <div className={ className.toString() }>
      <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5 0C9.184 0 0 9.184 0 20.5C0 31.816 9.184 41 20.5 41C31.816 41 41 31.816 41 20.5C41 9.184 31.816 0 20.5 0ZM20.5 6.15C23.903 6.15 26.65 8.897 26.65 12.3C26.65 15.703 23.903 18.45 20.5 18.45C17.097 18.45 14.35 15.703 14.35 12.3C14.35 8.897 17.097 6.15 20.5 6.15ZM20.5 35.26C15.375 35.26 10.8445 32.636 8.2 28.659C8.2615 24.5795 16.4 22.345 20.5 22.345C24.5795 22.345 32.7385 24.5795 32.8 28.659C30.1555 32.636 25.625 35.26 20.5 35.26Z" fill="white"/>
      </svg>
      <div>
        <h4>Nome</h4>
        <p>Função</p>
      </div>
    </div>
  );
}

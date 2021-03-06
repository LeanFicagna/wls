import React from "react";

export default function ListaTarefas() {
    return (
        <div className='context-menu stories-context-menu'>
        <button>
            <span>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.979401 10.179V12.6185H3.41892L10.6139 5.42355L8.17437 2.98403L0.979401 10.179ZM12.5005 3.53699C12.7542 3.28328 12.7542 2.87344 12.5005 2.61973L10.9782 1.09746C10.7245 0.843753 10.3146 0.843753 10.0609 1.09746L8.87045 2.28795L11.31 4.72747L12.5005 3.53699Z" fill="black" fill-opacity="0.4"/>
                </svg>
            </span>
            <h5>Atualizar tarefa</h5>
        </button>
        <button>
            <span>
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2268 1.07272H8.66497L7.93301 0.381424H4.27322L3.54126 1.07272H0.979401V2.45531H11.2268V1.07272ZM1.71136 3.1466V11.4421C1.71136 12.2026 2.37012 12.8247 3.17528 12.8247H9.03095C9.8361 12.8247 10.4949 12.2026 10.4949 11.4421V3.1466H1.71136Z" fill="black" fill-opacity="0.4"/>
                </svg>
            </span>
            <h5>Remover tarefa</h5>
        </button>
        </div>
    );
}
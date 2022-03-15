import { useState } from "react";

type Props = {
  status: number,
  setStatus: React.Dispatch<React.SetStateAction<number>>,
}

export default function ModalNew({status, setStatus}: Props) {
  return (
    <div className="modal">
        <div className="container-modal">
            <div className="modal-header">
              <h2>Editar tarefas</h2>
            </div>
            <form>
              <div className="modal-body">
                <p className="error"></p>
                <input type='text' placeholder="Nome" id="title" name="title" />
                <input className="descricao" placeholder="description" type='text' id="description" name="description" />
              </div>
              <div className="modal-foot">
                <button type="button"><h4>CANCELAR</h4></button>
                <button type="button"><h4>SALVAR</h4></button>
              </div>
            <div className="progresso">
                <button type="button" id={status == 0? 'selected': ''} onClick={() => setStatus(1)}>
                    Em progresso</button>
                <button type="button" id={status == 1? 'selected': ''} onClick={() => setStatus(0)}>
                    Concluído</button>
            </div>
            </form>
        </div>
    </div>
  );
}

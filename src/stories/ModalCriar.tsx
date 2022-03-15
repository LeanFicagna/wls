export default function ModalNew() {
  return (
    <div className="modal">
        <div className="container-modal">
            <div className="modal-header">
              <h2>Criar tarefa</h2>
            </div>
            <form>
              <div className="modal-body">
                <p className="error"></p>
                <input type='text' placeholder="Nome" id="title" name="title" defaultValue={'Título'} />
                <input className="descricao" placeholder="description" type='text' id="description" name="description" defaultValue={'Descrição'} />
              </div>
              <div className="modal-foot">
                <button type="button"><h4>CANCELAR</h4></button>
                <button type="submit"><h4>SALVAR</h4></button>
              </div> 
            </form>
        </div>
    </div>
  );
}
  
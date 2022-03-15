import api from "../../../services/api";
import './styles.css';
import './../styles.css';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IFormInputs {
  title: string
  description: string
}

const schema = yup.object({
  title: yup.string().required('s'),
  description: yup.string().required('s')
}).required('Título e descrição obrigatórios');

type Props = {
  guid: string,
  title: string,
  description: string,
  setGuid: React.Dispatch<React.SetStateAction<string>>,
  situation: string,
  setSituation: React.Dispatch<React.SetStateAction<string>>,
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>,
  getAll: () => void,
}

export default function ModalEdit({setGuid, title, description, situation, setSituation, guid, setModalEdit, getAll}: Props) {

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: IFormInputs) => {

    setModalEdit(false);
    api.put('', {
      "guid": guid,
      "title": data.title,
      "description": data.description,
      "situation": situation
    }).then(() => {
        getAll();
        setGuid('');
    });
  }

  return (
    <div className="modal-edit">
        <div className="container-modal">
            <div className="modal-header">
              <h2>Editar tarefa</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-body">
                <p className="error">{errors.description?.message === 's'
                                        || errors.title?.message === 's'? 'Preencha todos os campos': ''}</p>
                <input {...register("title")} defaultValue={title} type='text' placeholder="Nome" id="title" name="title" />
                <input {...register("description")} defaultValue={description} className="descricao" placeholder="description" type='text' id="description" name="description" />
                <div className="progresso">
                  <button type="button" id={situation === 'completed'? 'selected': ''} onClick={
                      () => setSituation('uncompleted')
                  }>Em progresso</button>
                  <button type="button" id={situation === 'uncompleted'? 'selected': ''} onClick={
                      () => setSituation('completed')
                  }>Concluído</button>
                </div>
              </div>
              <div className="modal-foot">
                <button type="button" onClick={() => { setModalEdit(false); setGuid('') }}><h4>CANCELAR</h4></button>
                <button type="submit"><h4>SALVAR</h4></button>
              </div> 
            </form>
        </div>
    </div>
  );
}
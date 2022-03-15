import api from "../../../services/api";
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
  setModalNew: React.Dispatch<React.SetStateAction<boolean>>,
  getAll: () => void,
}

export default function ModalNew({setModalNew, getAll}: Props) {

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormInputs) => {
    const { title, description } = data;
    
    setModalNew(false);

    api.post('', 	{
      "title": title,
      "description": description
    }).then(() => getAll());
  }

  return (
    <div className="modal">
        <div className="container-modal">
            <div className="modal-header">
              <h2>Criar tarefa</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-body">
                <p className="error">{errors.description?.message === 's'
                                        || errors.title?.message === 's'? 'Preencha todos os campos': ''}</p>
                <input {...register("title")} type='text' placeholder="Nome" id="title" name="title" />
                <input {...register("description")} className="descricao" placeholder="description" type='text' id="description" name="description" />
              </div>
              <div className="modal-foot">
                <button type="button" onClick={() => setModalNew(false)}><h4>CANCELAR</h4></button>
                <button type="submit"><h4>SALVAR</h4></button>
              </div> 
            </form>
        </div>
    </div>
  );
}

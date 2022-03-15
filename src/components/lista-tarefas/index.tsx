import { useEffect, useState } from 'react';
import { TasksApi, useTasksApi } from '../../context/TasksApi';
import api from '../../services/api';
import ModalNew from '../modal/criar';
import ModalEdit from '../modal/editar';
import './styles.css'; 

export default function ListaTarefas() {
    const { getAll, tasks, setTasks } = useTasksApi();
    const [ modalNew, setModalNew ] = useState<boolean>(false);
    const [ modalEdit, setModalEdit ] = useState<boolean>(false);

    const [guid,setGuid] = useState('');
    const [title,setTitle] = useState('');
    const [situation,setSituation] = useState('');
    const [description,setDescription] = useState('');
    
    useEffect(() => {
        getAll().then();
    }, [getAll]);


    async function atualizarTask(e: TasksApi) {
        setSituation(e.situation);
        setTitle(e.title);
        setDescription(e.description);

        setModalEdit(true);
    }

    function statusTask(e: TasksApi, i: number) {
            var newState = {
            guid: `${e.guid}`,
            title: `${e.title}`,
            description: `${e.description}`,
            situation: e.situation === 'uncompleted'? 'completed': 'uncompleted'};
            api.put('/', newState).then(() => {
                tasks[i] = newState;
                setTasks([...tasks]);
            });
    }

    function deleteTask(e: TasksApi) {
        setGuid('');
        api.delete(e.guid).then(() => getAll())
    }

    return (
        <>
            {
            tasks.length < 1? <h2 style={{color: "black", marginBottom: "30px"}}>Nenhuma tarefa existente</h2>:
            tasks.map((e, i) => {
                return (
                    <>
                        <div className="lista" key={e.guid}>
                            <div className="title">
                                <h4>{e.title}</h4>
                                <button className='setting' onClick={() => setGuid(guid === ''? e.guid: '') }>
                                    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 12C2.53043 12 3.03914 12.2107 3.41421 12.5858C3.78929 12.9609 4 13.4696 4 14C4 14.5304 3.78929 15.0391 3.41421 15.4142C3.03914 15.7893 2.53043 16 2 16C1.46957 16 0.96086 15.7893 0.585787 15.4142C0.210714 15.0391 0 14.5304 0 14C0 13.4696 0.210714 12.9609 0.585787 12.5858C0.96086 12.2107 1.46957 12 2 12ZM2 6C2.53043 6 3.03914 6.21071 3.41421 6.58579C3.78929 6.96086 4 7.46957 4 8C4 8.53043 3.78929 9.03914 3.41421 9.41421C3.03914 9.78929 2.53043 10 2 10C1.46957 10 0.96086 9.78929 0.585787 9.41421C0.210714 9.03914 0 8.53043 0 8C0 7.46957 0.210714 6.96086 0.585787 6.58579C0.96086 6.21071 1.46957 6 2 6ZM2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4C1.46957 4 0.96086 3.78929 0.585787 3.41421C0.210714 3.03914 0 2.53043 0 2C0 1.46957 0.210714 0.960859 0.585787 0.585786C0.96086 0.210714 1.46957 0 2 0Z" fill="white" />
                                    </svg>
                                </button>
                                
                            </div>
                                
                            <p>{e.description}</p>
                            <button className='task-button' 
                                    onClick={() => statusTask(e, i)}>
                                <h4>
                                    {e.situation === 'completed'? 
                                        <>
                                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 2L6 14L0.5 8.5L1.91 7.09L6 11.17L16.59 0.589996L18 2Z" fill="black"/>
                                            </svg>
                                            Concluído
                                        </>: 
                                        <>
                                            Em progresso
                                        </>
                                    }
                                </h4>
                            </button>
                            {
                                guid === e.guid &&
                                <>
                                    <div className='overlay' onClick={() => setGuid('')}></div>
                                    <div className='context-menu'>
                                        <button onClick={() => atualizarTask(e)}>
                                            <span>
                                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.979401 10.179V12.6185H3.41892L10.6139 5.42355L8.17437 2.98403L0.979401 10.179ZM12.5005 3.53699C12.7542 3.28328 12.7542 2.87344 12.5005 2.61973L10.9782 1.09746C10.7245 0.843753 10.3146 0.843753 10.0609 1.09746L8.87045 2.28795L11.31 4.72747L12.5005 3.53699Z" fill="black" fill-opacity="0.4"/>
                                                </svg>
                                            </span>
                                            <h5>Atualizar tarefa</h5>
                                        </button>
                                        <button onClick={() => deleteTask(e)}>
                                            <span>
                                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.2268 1.07272H8.66497L7.93301 0.381424H4.27322L3.54126 1.07272H0.979401V2.45531H11.2268V1.07272ZM1.71136 3.1466V11.4421C1.71136 12.2026 2.37012 12.8247 3.17528 12.8247H9.03095C9.8361 12.8247 10.4949 12.2026 10.4949 11.4421V3.1466H1.71136Z" fill="black" fill-opacity="0.4"/>
                                                </svg>
                                            </span>
                                            <h5>Remover tarefa</h5>
                                        </button>
                                    </div>
                                </>
                            }
                            {modalEdit === true &&
                                    <ModalEdit title={title} description={description} situation={situation} setGuid={setGuid} setSituation={setSituation} guid={guid} setModalEdit={setModalEdit} getAll={getAll} />}
                        </div>
                    </>
                );
            })}
            
            <div className='new-task'>
                <button onClick={() => setModalNew(true)}>
                    <span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white"/>
                        </svg>
                    </span>
                    <h4>Nova tarefa</h4>
                </button>
            </div>
            
            {modalNew && 
            <ModalNew setModalNew={setModalNew} getAll={getAll} />}
        </>
    )
}
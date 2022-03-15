type Props = {
    status: number,
    setStatus: React.Dispatch<React.SetStateAction<number>>,
}

export default function Progresso({status, setStatus}: Props) {
    return (
        <div className="progresso" style={{"width": "250px", "height": "70px"}}>
            <button id={status == 0? 'selected': ''} onClick={() => setStatus(1)}>
                Em progresso</button>
            <button id={status == 1? 'selected': ''} onClick={() => setStatus(0)}>
                Concluído</button>
        </div>
    );
}
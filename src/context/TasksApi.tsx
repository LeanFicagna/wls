import { useCallback, useState } from "react";
import api from "../services/api";

export interface TasksApi {
    guid: string,
    title: string;
    description: string;
    situation: string;
}

const g = () => api.get<TasksApi[]>('/');

export const useTasksApi = () => {
    const [tasks, setTasks] = useState<TasksApi[]>([]);

    const getAll = useCallback(async () => {
        const { status, data } = await g();

        if (status !== 200 && status !== 204) throw new Error();
        setTasks(data);
    }, []);
    return {
        tasks,
        getAll,
        setTasks
    }
}

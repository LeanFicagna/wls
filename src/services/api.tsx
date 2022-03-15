import axios from "axios";

const api = axios.create({
    baseURL: 'https://chronos.compraqui.app/api/tasks',
});

export default api;
import axios from 'axios';
import httpRequest from '.';
import { BASE_URL, ENDPOINTS } from '../constants/endpoints';
import Todo from '../models/todo';

const url = BASE_URL + ENDPOINTS.Todos;

export const getTodos = async () => {
    const response = await axios.get(url);
    if (response.status !== 200) throw new Error(response.statusText);
    const data: Todo[] = response.data;
    return data;
};

export const addTodo = async (todo: Todo) => {
    const response = await axios.post(url, todo);
    if (response.status !== 200) throw new Error(response.statusText);
    const data: Todo = response.data;
    return data;
};

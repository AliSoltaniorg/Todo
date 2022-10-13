import axios from 'axios';
import httpRequest from '.';
import { BASE_URL, ENDPOINTS } from '../constants/endpoints';
import Todo from '../models/todo';

export const getTodos = async () => {
    const response = await httpRequest().get(ENDPOINTS.Todos);
    if (response.status !== 200) throw new Error(response.statusText);
    const data: Todo[] = response.data;
    return data;
};

export const addTodo = async (todo: Todo) => {
    const response = await httpRequest().post(ENDPOINTS.Todos, todo);
    if (response.status !== 200) throw new Error(response.statusText);
    const data: Todo = response.data;
    return data;
};

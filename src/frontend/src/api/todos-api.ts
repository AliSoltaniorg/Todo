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

export const editTodo = async (id: number, todo: Todo) => {
    const response = await httpRequest().put(ENDPOINTS.Todos + id, todo);
    if (response.status !== 200) throw new Error(response.statusText);
    const data: Todo = response.data;
    return data;
};

export const deleteTodo = async (id: number) => {
    const response = await httpRequest().delete(ENDPOINTS.Todos + id);
    if (response.status !== 200) throw new Error(response.statusText);
    return response.status;
};

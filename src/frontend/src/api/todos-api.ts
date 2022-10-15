import httpRequest from '.';
import { ENDPOINTS } from '../constants/endpoints';
import Todo from '../models/todo';

export const getTodos = async () => {
    const response = await httpRequest().get(ENDPOINTS.Todos);
    if (response.status !== 200) throw new Error(response.statusText);
    const todos: Todo[] = [];

    response.data.forEach((item: Todo) => {
        let todo: Todo = new Todo({
            ...item,
            isStart: item.isStart === undefined && false,
        });
        console.log('due = ', todo.isDueDate && !todo.isDone && !todo.isStart);
        todos.push(todo);
    });

   

    return todos;
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

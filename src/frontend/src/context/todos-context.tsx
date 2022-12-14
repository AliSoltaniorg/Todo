import {
    createContext,
    FC,
    PropsWithChildren,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { addTodo, getTodos, editTodo, deleteTodo } from '../api/todos-api';
import { CrudTypes } from '../constants/types';
import Todo from '../models/todo';

export const TodosContext = createContext<CrudTypes<Todo>>({
    items: [],
    isLoading: false,
    onAddItem: (item) => {},
    onDeleteItem: (id) => {},
    onEditItem: (id, item) => {},
    onSearchItems: (filter?: string) => {},
    isActiveSearch: false,
    searchItems: [],
});

const TodosContextProvider: FC<PropsWithChildren> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [searchTodos, setSearchTodos] = useState<Todo[]>([]);
    const [isSearchResult, setIsSearchResult] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const fetchTodosData = useCallback(async () => {
        try {
            setIsLoading(true);
            const data = await getTodos();
            setTodos(data);
        } catch (error) {
            setTodos([]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchTodosData();
    }, [fetchTodosData]);

    const addTodoHandler = async (todo: Todo) => {
        try {
            const data = await addTodo(todo);
            setTodos((prevTodos) => {
                return prevTodos.concat(
                    new Todo({
                        ...todo,
                        ...data,
                    })
                );
            });
        } catch (error) {
        } finally {
        }
    };

    const editTodoHandler = async (id: any, item: Todo) => {
        try {
            const data = await editTodo(id, item);
            setTodos((prevTodos) => {
                const indexTodo = prevTodos.findIndex((todo) => todo.id === id);
                const updatedTodos = prevTodos;
                const updatedTodo = {
                    ...updatedTodos[indexTodo],
                    ...data,
                };
                updatedTodos[indexTodo] = updatedTodo;
                return updatedTodos;
            });
        } catch (error) {}
    };

    const deleteTodoHandler = async (id: any) => {
        try {
            await deleteTodo(id);
            setTodos((prevTodos) => {
                return prevTodos.filter((todo) => todo.id !== id);
            });
            if (isSearchResult) {
                setSearchTodos((prevTodos) => {
                    return prevTodos.filter((todo) => todo.id !== id);
                });
            }
        } catch (error) {
        } finally {
        }
    };

    const searchTodosHandler = (filter?: string) => {
        if (filter?.trim().length === 0) {
            setIsSearchResult(false);
            return;
        }
        const searchTodosResult = todos.filter(
            (todo) =>
                todo.title.toLowerCase().search(filter!.toLowerCase() || '') !==
                    -1 ||
                todo.description
                    ?.toLowerCase()
                    .search(filter!.toLowerCase() || '') !== -1
        );
        setIsSearchResult(true);
        setSearchTodos(searchTodosResult);
    };

    const contextValues: CrudTypes<Todo> = {
        items: todos,
        isLoading: isLoading,
        onSearchItems: searchTodosHandler,
        onAddItem: addTodoHandler,
        onDeleteItem: deleteTodoHandler,
        onEditItem: editTodoHandler,
        searchItems: searchTodos,
        isActiveSearch: isSearchResult,
    };

    return (
        <TodosContext.Provider value={contextValues}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;

import {
    createContext,
    FC,
    PropsWithChildren,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { getTodos } from '../api/todos-api';
import { CrudTypes } from '../constants/types';
import Todo from '../models/todo';

export const TodosContext = createContext<CrudTypes<Todo>>({
    items: [],
    isLoading: false,
    onAddItem: (item) => {},
    onDeleteItem: (item) => {},
    onEditItem: (item) => {},
});

const TodosContextProvider: FC<PropsWithChildren> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

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

    const addTodoHandler = (todo: Todo) => {
        setTodos((prevTodos) => {
            return prevTodos.concat(todo);
        });
    };

    const contextValues: CrudTypes<Todo> = {
        items: todos,
        isLoading: isLoading,
        onAddItem: addTodoHandler,
        onDeleteItem: (item) => {},
        onEditItem: (item) => {},
    };

    return (
        <TodosContext.Provider value={contextValues}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;
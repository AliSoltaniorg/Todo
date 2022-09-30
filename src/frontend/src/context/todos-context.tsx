import { createContext, FC, PropsWithChildren } from 'react';
import { CrudTypes } from '../constants/types';

export const TodosContext = createContext<CrudTypes<number>>({
    items: [],
    onAddItem: (item) => {},
    onDeleteItem: (item) => {},
    onEditItem: (item) => {},
});

const TodosContextProvider: FC<PropsWithChildren> = (props) => {
    const contextValues: CrudTypes<number> = {
        items: [],
        onAddItem: (item) => {},
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

export type CrudTypes<TEntity> = {
    items: TEntity[];
    isLoading: boolean;
    onAddItem: (item: TEntity) => void;
    onEditItem: (item: TEntity) => void;
    onDeleteItem: (item: TEntity) => void;
};

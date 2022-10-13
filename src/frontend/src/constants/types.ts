export type CrudTypes<TEntity> = {
    items: TEntity[];
    isLoading: boolean;
    onAddItem: (item: TEntity) => void;
    onEditItem: (id: any, item: TEntity) => void;
    onDeleteItem: (id: any) => void;
    onSearchItems?: (filter?: string) => void;
    isActiveSearch: boolean;
    searchItems: TEntity[];
};

export type CrudTypes<TEntity> = {
    items:TEntity[],
    onAddItem:(item : TEntity) => void,
    onEditItem:(item: TEntity) => void,
    onDeleteItem:(item: TEntity) => void,
}
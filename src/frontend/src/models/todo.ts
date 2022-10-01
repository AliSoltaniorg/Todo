export type TodoType = {
    id?: number;
    title: string;
    description?: string;
    dueDate?: string;
    reminderDate?: string;
    isDone?: boolean;
    isStart?: boolean;
    amountTime?: string;
};

class Todo {
    id?: number;
    title: string;
    description?: string;
    dueDate?: string;
    reminderDate?: string;
    isDone?: boolean;
    isStart?: boolean;
    amountTime?: string;
    constructor(todo: TodoType) {
        this.id = todo.id;
        this.title = todo.title;
        this.description = todo.description;
        this.dueDate = todo.dueDate;
        this.reminderDate = todo.reminderDate;
        this.isDone = todo.isDone;
        this.isStart = todo.isStart;
        this.amountTime = todo.amountTime;
    }
}

export default Todo;

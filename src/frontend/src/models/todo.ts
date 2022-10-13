export type TodoType = {
    id?: number;
    title: string;
    description?: string;
    dueDate?: string;
    reminderDate?: string;
    isDone?: boolean;
    isStart?: boolean;
    amountTime?: string;
    remainingTime?: string;
    isDueDate?: boolean;
    isReminderDate?: boolean;
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
    remainingTime?: string;
    isDueDate?: boolean;
    isReminderDate?: boolean;
    constructor(todo: TodoType) {
        this.id = todo.id;
        this.title = todo.title;
        this.description = todo.description;
        this.dueDate = todo.dueDate;
        this.reminderDate = todo.reminderDate;
        this.isDone = false;
        this.isStart = todo.isStart;
        this.amountTime = todo.amountTime;
        this.remainingTime = todo.remainingTime;
        this.isDueDate =
            new Date(
                new Date(todo.dueDate!.toString()).toDateString()
            ).getTime() === new Date(new Date().toDateString()).getTime();
        this.isReminderDate = isReminderDate(todo.reminderDate!.toString());
    }
}

const isReminderDate = (prevDate: string) => {
    const date = new Date(prevDate);
    const nowDate = new Date();
    return date >= nowDate && date.getDay() === nowDate.getDay();
};

export default Todo;

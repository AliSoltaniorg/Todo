class Todo{
    id:number;
    title:string;
    description:string;
    dueDate : string;
    reminderDate:string;
    isDone:boolean;
    isStop:boolean;
    isStart:boolean;
    isResume:boolean;
    constructor(id:number,title:string,description:string,dueDate:string,
        reminderDate:string,isDone:boolean,isStop:boolean,isStart:boolean,isResume:boolean){
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.reminderDate = reminderDate; 
        this.isDone = isDone;
        this.isStop = isStop;
        this.isResume = isResume;
        this.isStart:isStart;
    }
}


export default Todo
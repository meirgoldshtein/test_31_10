import { v4 } from "uuid"

enum Status {
    pending = 'pending',
    progress = 'progress',
    completed = 'completed'
}

export default class Todo {
    public id: string

    public status: Status = Status.pending
    public createdAt: Date 
    constructor(
        public name : string,
        public priority : string,
        public description : string
    ) {
        this.id = v4()
        this.createdAt = new Date()

    }

    progress() {    
       switch (this.status) {
        case Status.pending:
            this.status = Status.progress
            break;
        case Status.progress:
            this.status = Status.completed
            break;
        case Status.completed:
            return
       }
    }
}
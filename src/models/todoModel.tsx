import { v4 } from "uuid"

export default class Todo {
    public id: string
    public completed: boolean = false
    public createdAt: Date 
    constructor(
        public title: string
    ) {
        this.id = v4()
        this.createdAt = new Date()
    }

    toggle() {    
        this.completed = !this.completed
    }
}
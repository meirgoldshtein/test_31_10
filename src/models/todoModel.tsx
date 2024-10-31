import { v4 } from "uuid"
import  Status  from "./Status"
import Priority from "./Priority"

export default class Todo {
    public _id: string

    constructor(
        public name : string,
        public priority : Priority,
        public description : string,
        public status  :Status
    ) {
        this._id = v4()
    }

}
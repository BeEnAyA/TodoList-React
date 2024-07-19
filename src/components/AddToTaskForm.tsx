
import { Input } from "@/components/ui/input"
import ReusableButton from "./ReusableButton"
import { Label } from "@/components/ui/label"
import { useState } from "react"

type AddToTaskFormProps={
 handleAddTodo:(todoText: string)=>void 
}
export default function AddToTaskForm({handleAddTodo}:AddToTaskFormProps) {
    const [todoText, setTodoText] = useState("");
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            handleAddTodo(todoText);
            setTodoText("")
        }}>
            <Label htmlFor="task">Add a todo</Label>
            <Input type="text" className="block w-full mb-2" id="task" onChange={(e) => {
                setTodoText(e.target.value)
            }} value={todoText} />
            <ReusableButton title="Add to list" />
        </form>
    )
}


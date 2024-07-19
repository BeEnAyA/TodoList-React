import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import DeleteButton from "./DeleteButton";
import { Todo } from "@/App"

type TodoListTProps = {
    todoList: Todo[],
    handleLineThrough: (id: number) => void,
    handleDeleteTodo: (id: number) => void,
}

export default function TodoList({ todoList, handleLineThrough, handleDeleteTodo }: TodoListTProps) {
    return (
        <ScrollArea className="h-[440px] p-3">
            <div className="p-4">
                {/* <h4 className="mb-4 text-sm font-medium leading-none">ToDo List</h4> */}
                {todoList.length == 0 ? <p className="flex justify-center items-center text-muted-foreground">Please a add new task</p> : null}
                {todoList.map((todo) => {
                    return (<>
                        <div key={todo.id} className="text-sm flex items-center justify-between" onClick={(e) => {
                            e.stopPropagation();
                            handleLineThrough(todo.id)
                        }}>
                            <span className={todo.isCompleted ? "line-through text-[#c7bfbf]" : ""}>{todo.task}</span>
                            <DeleteButton id={todo.id} handleDeleteTodo={handleDeleteTodo} />
                        </div>
                        <Separator className="my-2" />
                    </>)
                })
                }

            </div>
        </ScrollArea>
    )
}

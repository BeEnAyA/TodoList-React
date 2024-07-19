import { createContext, useEffect, useState } from "react"
import { Todo } from "@/lib/types";

type TodoContextProviderProps = {
    children: React.ReactNode;
}

type TodoContextType = {
    todoList: Todo[],
    totalNoOfTodo: number,
    totalNoOfCompletedTodo: number,
    handleAddTodo: (todoText: string) => void,
    handleLineThrough: (id: number) => void,
    handleDeleteTodo: (id: number) => void
}

export const TodoContext = createContext<TodoContextType | null>(null)

export default function TodoContextProvider({ children }: TodoContextProviderProps) {
    const getTodoFromLocalStorage = () => {
        const todoList = localStorage.getItem("todoItems");
        if (todoList) {
            return JSON.parse(todoList)
        }
        return []
    }
    //state
    const [todoList, setTodoList] = useState<Todo[]>(getTodoFromLocalStorage());

    //derived state
    const totalNoOfTodo = todoList.length;
    const totalNoOfCompletedTodo = todoList.filter(t => t.isCompleted).length

    //side effects
    useEffect(() => {
        localStorage.setItem("todoItems", JSON.stringify(todoList))
    }, [todoList])

    //event handlers
    const handleAddTodo = (todoText: string): void => {
        setTodoList((prev) => {
            return [...prev, { id: prev.length + 1, task: todoText, isCompleted: false }]
        })
    }


    const handleLineThrough = (id: number): void => {
        setTodoList(todoList.map(t => {
            if (t.id === id) {
                return { ...t, isCompleted: !t.isCompleted }
            }
            return t;
        }))
    }


    const handleDeleteTodo = (id: number): void => {
        setTodoList((prev) => prev.filter(t => t.id !== id))
    }


    return (
        <TodoContext.Provider value={{ todoList, totalNoOfTodo, totalNoOfCompletedTodo, handleAddTodo, handleLineThrough, handleDeleteTodo }}>{children}</TodoContext.Provider>
    )
}

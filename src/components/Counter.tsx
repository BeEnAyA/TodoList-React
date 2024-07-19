import { useTodoContext } from "@/lib/hooks"

export default function Counter() {
    const { totalNoOfCompletedTodo, totalNoOfTodo } = useTodoContext();
    return (
        <p>
            <span className='text-bold'>{totalNoOfCompletedTodo}{" "}</span>/{" "}{totalNoOfTodo} tasks completed
        </p>
    )
}

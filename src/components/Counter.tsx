
type CounterProps = {
    totalNoOfTodo: number,
    totalNoOfCompletedTodo: number
}
export default function Counter({ totalNoOfTodo, totalNoOfCompletedTodo }: CounterProps) {
    return (
        <p>
            <span className='text-bold'>{totalNoOfCompletedTodo}{" "}</span>/{" "}{totalNoOfTodo} tasks completed
        </p>
    )
}

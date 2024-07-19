
type DeleteButtonProps = {
    id: number,
    handleDeleteTodo: (id: number) => void
}

export default function DeleteButton({ id, handleDeleteTodo }: DeleteButtonProps) {
    return (
        <button onClick={(event) => {
            event.stopPropagation()
            handleDeleteTodo(id)
        }}><i className="fa-solid fa-trash text-red-600"></i></button>
    )
}

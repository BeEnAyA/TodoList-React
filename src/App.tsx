
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import Logo from './components/Logo'
import Counter from './components/Counter'
import AddToTaskForm from './components/AddToTaskForm'
import TodoList from './components/TodoList'
import ReusableButton from './components/ReusableButton'
export type Todo = {
  task: string,
  isCompleted: boolean,
  id: number
}
function App() {
  const todoItems: Todo[] = [];

  //state
  const [todoList, setTodoList] = useState(todoItems)

  //derived state
  const totalNoOfTodo = todoList.length;
  const totalNoOfCOmpletedTodo = todoList.filter(t => t.isCompleted).length


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
    <>
      <div className="flex flex-col items-center justify-center border-2 border-x-cyan-950 min-w-100 min-h-screen">
        <Card className="w-[972px] h-[500px] shadow-lg">
          <CardHeader className='bg-[#e1ffd8] h-[60px] flex flex-row justify-between items-center'>
            <Logo />
            <Counter totalNoOfTodo={totalNoOfTodo} totalNoOfCompletedTodo={totalNoOfCOmpletedTodo} />
          </CardHeader>
          <CardContent className='grid grid-cols-[2fr_1fr] p-0 h-[calc(500px-60px)]'>
            <div>
              <TodoList todoList={todoList} handleLineThrough={handleLineThrough} handleDeleteTodo={handleDeleteTodo} />
            </div>
            <div className='border-l-2 border-black/5 p-3 flex flex-col justify-between'>
              <AddToTaskForm handleAddTodo={handleAddTodo} />
              <div className='mt-auto flex space-x-2'>
                <ReusableButton title='Login' />
                <ReusableButton title='Sign Up' />
              </div>
            </div>
          </CardContent>
        </Card>
        <CardFooter className="flex justify-between w-[972px] text-sm p-[8px_8px]">
          <div >All rights reserved</div>
          <div>Version <b>1.5</b></div>
        </CardFooter>
      </div>
    </>
  )
}
export default App

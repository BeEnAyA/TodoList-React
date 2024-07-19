import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import Logo from './components/Logo'
import Counter from './components/Counter'
import AddToTaskForm from './components/AddToTaskForm'
import TodoList from './components/TodoList'
import ReusableButton from './components/ReusableButton'
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";



function App() {
  const { login, register, isAuthenticated, user, logout, isLoading } = useKindeAuth();
  return (
    <>
      <div className="flex flex-col items-center justify-center border-2 border-x-cyan-950 min-w-100 min-h-screen">
        <Card className="w-[972px] h-[500px] shadow-lg">
          <CardHeader className='bg-[#e1ffd8] h-[60px] flex flex-row justify-between items-center'>
            <Logo />
            <Counter />
          </CardHeader>
          <CardContent className='grid grid-cols-[2fr_1fr] p-0 h-[calc(500px-60px)]'>
            <div>
              <TodoList />
            </div>
            <div className='border-l-2 border-black/5 p-3 flex flex-col justify-between'>
              <AddToTaskForm />
              <div className='mt-auto flex flex-col space-y-2'>
                {
                  isLoading ? null : isAuthenticated ? (
                    <>
                      <p>Logged in as:{user?.email}</p>
                      <ReusableButton title='Logout' onClick={logout} />
                    </>
                  )
                    :
                    (<>
                      <ReusableButton title='Login' onClick={login} />
                      <ReusableButton title='Sign Up' onClick={register} />
                    </>)
                }

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

import {TodoContext} from "@/contexts/TodoContextProvider";
import { useContext } from "react";

export function useTodoContext(){
    const context=useContext(TodoContext);
    if(!context){
        throw new Error("Provider is not added")
    }
    return context;
}
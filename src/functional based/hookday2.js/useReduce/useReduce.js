import { useReducer, useState } from "react"

const reducerFunction=(state,action)=>{
    console.log(state);
    console.log(action);
    switch(action.type){
        case "INCREMENT_ACTION":
            return{...state,age:state.age+1}
            case "DECREMENT_ACTION":
            return{...state,age:state.age-1}
            case "ADD_TODO":
            return{...state,todos:[...state.todos,action.next]}
            case "DELETE_TODO":
      const updatedTodos = state.todos.filter(
        (todo, index) => index !== action.index
      );
      return { ...state, todos: updatedTodos };
            default:
                return state
    }

}

const initialState={
    age:22,
    name:"akhila",
    todos:[]
}



const UseReduceExample=()=>{
    const[currentState,dispatchFunction]= useReducer(reducerFunction,initialState)
    const[value,setValue]= useState("")
console.log(currentState)


    const incrementHandler=()=>{
        dispatchFunction({
type:"INCREMENT_ACTION"
        })
    }


    const decrementHandler=()=>{
        dispatchFunction({
            type:"DECREMENT_ACTION"
                    })
                }
    const onChangeHandler=(event)=>{
setValue(event.target.value)
    }
    const addTodo=()=>{
        dispatchFunction({
            type:"ADD_TODO",
            next:value
                    })
    }
    const deleteTodo = (index) => {
        dispatchFunction({
          type: "DELETE_TODO",
          index,
        });
      };

    return(
        <>
        <h1>iam use reduce hook</h1>
        <h2>{currentState.age}</h2>
        <button onClick={incrementHandler}>increment age</button>
        <button onClick={decrementHandler}>decrement age</button>
    <input value={value} onChange={onChangeHandler}/>
    <button onClick={addTodo}>ADD todo</button>
    {currentState.todos.map((value, index) => (
        <div key={index}>
          <h5>{value}</h5>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ))}
    
        </>
    )
}
export default UseReduceExample
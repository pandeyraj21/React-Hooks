import React, { useReducer } from 'react'

function Reducer() {
  const intialState=0;

  const reducer=(state,action)=>{
    console.log(state,action)
    if(action.type==='INCREMENT'){
      return state+1;
    }else{
      return state-1;
    }
   


  }
 const[state,dispatch]= useReducer(reducer,intialState);
  return (
    <div>
      <p>{state}</p>
      <div>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>Inc</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>Dec</button>
      </div>

    </div>
  )
}

export default Reducer
import React, { useReducer } from 'react';

const initialState= {
  count:0
}

const reducer = (state,action)=>{
 switch(action.type){
   case 'Increment' : return{
     count: state.count + 1
   },
   case 'Decrement': return {
     count: count - 1
   },

   default: return {
     state
   }


 }
}

function CounterReducer(){
  

  const [state,dispatch] = useReducer(reducer,initialState)
  return(
    <div>
      <h3></h3>
      <button>Increment Counter</button>
    </div>
  )
}

export default CounterReducer
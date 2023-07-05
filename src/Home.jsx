import React from 'react';

import { useDispatch,useSelector } from 'react-redux';
import { decrement, increment } from './TodoSlice';

function Home() {

    //const c = 20;
    /*const {c} = useSelector(state=>state.custom);
    const dispatch = useDispatch();

    const addbtn= ()=>{
        dispatch({
            type:"increment"
        });

    }
    const subbtn = ()=>{
        dispatch({
            type:"decrement"
        })

    }
    */

    const {count} = useSelector(state=>state.counter);
    const dispatch = useDispatch();

  return (
    <>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default Home;
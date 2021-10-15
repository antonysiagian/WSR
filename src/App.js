import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount } from './feature/counterSlice'
import './style.css'

export const App = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <div>
            {count}
            <button onClick={()=> dispatch(incrementByAmount(1))}>Click me</button>
        </div>
    )
}